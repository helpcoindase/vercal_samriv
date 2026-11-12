import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET =
  process.env.JWT_SECRET || 'samwarthika_ayurveda_production_jwt_secret_2026_secure';
const JWT_EXPIRES_IN = '7d';

// ============================================================================
// Helpers
// ============================================================================
function generateSlug(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function cleanHtml(rawHtml: any) {
  if (!rawHtml) return '';
  let html = rawHtml.toString();
  html = html.replace(/\s*style="[^"]*"/gi, '');
  html = html.replace(/\s*style='[^']*'/gi, '');
  let trimmed = html.trim();
  if (trimmed.startsWith('<blockquote>') && trimmed.endsWith('</blockquote>')) {
    const inner = trimmed.substring('<blockquote>'.length, trimmed.length - '</blockquote>'.length).trim();
    if (!inner.includes('</blockquote>')) {
      html = inner;
    }
  }
  html = html.replace(/<h[1-6]>([\s\S]*?)<\/h[1-6]>/gi, (match: string, inner: string) => {
    if (inner.includes('<p>') || inner.includes('<ul>') || inner.includes('<ol>') || inner.includes('<table>')) {
      return inner;
    }
    return match;
  });
  html = html.replace(/<span>([\s\S]*?)<\/span>/gi, '$1');
  html = html.replace(/(<p>\s*(<br\s*\/?>)?\s*<\/p>\s*){2,}/gi, '<p></p>');
  return html.trim();
}

async function verifyPassword(provided: string, storedHash?: string | null) {
  if (!storedHash) return false;
  const normalized = storedHash.replace(/^\$2y\$/, '$2a$');
  try {
    const isMatch = await bcrypt.compare(provided, normalized);
    if (isMatch) return true;
  } catch {}
  return provided === storedHash;
}

function getAuthUser(req: NextRequest) {
  let token: string | null = null;
  const authHeader = req.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7);
  } else if (req.headers.get('x-access-token')) {
    token = req.headers.get('x-access-token');
  } else {
    const cookie = req.cookies.get('admin_token');
    if (cookie) token = cookie.value;
  }
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET) as {
      id: number;
      username: string;
      email: string;
      role: string;
    };
  } catch {
    return null;
  }
}

// ============================================================================
// GET Handler
// ============================================================================
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ route?: string[] }> }
) {
  const { route = [] } = await params;
  const path = route.join('/');
  const { searchParams } = new URL(req.url);

  try {
    // 1. Health check
    if (path === '' || path === 'health') {
      const [result]: any = await pool.query('SELECT 1 as live');
      return NextResponse.json({
        status: 'healthy',
        database: 'connected',
        service: 'Samwarthika Next.js Native Vercel API',
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Auth me: /api/auth/me
    if (path === 'auth/me') {
      const user = getAuthUser(req);
      if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.json({ authenticated: true, user });
    }

    // 3. Public categories: /api/categories
    if (path === 'categories') {
      const [categories]: any = await pool.query(
        `SELECT c.category_id, c.category_name, c.category_slug,
                COUNT(CASE WHEN p.post_status = 'published' THEN 1 END) as post_count
         FROM category c
         LEFT JOIN posts p ON c.category_id = p.category_id
         GROUP BY c.category_id, c.category_name, c.category_slug
         ORDER BY c.category_name ASC`
      );
      return NextResponse.json({ success: true, categories });
    }

    // 4. Public tags: /api/tags
    if (path === 'tags') {
      const [tags]: any = await pool.query(
        `SELECT t.tag_id, t.tag_name, t.tag_slug, COUNT(pt.post_id) as post_count
         FROM tags t
         LEFT JOIN post_tags pt ON t.tag_id = pt.tag_id
         GROUP BY t.tag_id, t.tag_name, t.tag_slug
         ORDER BY t.tag_name ASC`
      );
      return NextResponse.json({ success: true, tags });
    }

    // 5. Public blogs list: /api/blogs
    if (path === 'blogs') {
      const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
      const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '6')));
      const offset = (page - 1) * limit;

      const category = searchParams.get('category')?.trim() || null;
      const tag = searchParams.get('tag')?.trim() || null;
      const search = searchParams.get('search')?.trim() || null;

      const conditions = ["p.post_status = 'published'"];
      const queryParams: any[] = [];

      if (category) {
        conditions.push('(c.category_slug = ? OR c.category_id = ?)');
        queryParams.push(category, isNaN(Number(category)) ? 0 : Number(category));
      }

      if (tag) {
        conditions.push(`p.post_id IN (
          SELECT pt.post_id FROM post_tags pt 
          INNER JOIN tags t ON pt.tag_id = t.tag_id 
          WHERE t.tag_slug = ? OR t.tag_id = ?
        )`);
        queryParams.push(tag, isNaN(Number(tag)) ? 0 : Number(tag));
      }

      if (search) {
        conditions.push('(p.post_title LIKE ? OR p.meta_description LIKE ? OR p.meta_keyword LIKE ?)');
        const wild = `%${search}%`;
        queryParams.push(wild, wild, wild);
      }

      const whereClause = conditions.join(' AND ');

      const [countResult]: any = await pool.query(
        `SELECT COUNT(*) as total 
         FROM posts p 
         LEFT JOIN category c ON p.category_id = c.category_id 
         WHERE ${whereClause}`,
        queryParams
      );
      const total = countResult[0]?.total || 0;

      const [posts]: any = await pool.query(
        `SELECT p.post_id, p.post_slug, p.post_title, p.author_name, p.post_status, 
                p.meta_title, p.meta_description, p.meta_keyword,
                p.image_path, p.created_at, p.published_at,
                c.category_name, c.category_slug, c.category_id
         FROM posts p
         LEFT JOIN category c ON p.category_id = c.category_id
         WHERE ${whereClause}
         ORDER BY p.created_at DESC
         LIMIT ? OFFSET ?`,
        [...queryParams, limit, offset]
      );

      if (posts.length > 0) {
        const postIds = posts.map((p: any) => p.post_id);
        const [tagRows]: any = await pool.query(
          `SELECT pt.post_id, t.tag_id, t.tag_name, t.tag_slug
           FROM post_tags pt
           INNER JOIN tags t ON pt.tag_id = t.tag_id
           WHERE pt.post_id IN (?)`,
          [postIds]
        );

        const tagMap: Record<number, any[]> = {};
        tagRows.forEach((row: any) => {
          if (!tagMap[row.post_id]) tagMap[row.post_id] = [];
          tagMap[row.post_id].push({
            tag_id: row.tag_id,
            tag_name: row.tag_name,
            tag_slug: row.tag_slug,
          });
        });

        posts.forEach((post: any) => {
          post.tags = tagMap[post.post_id] || [];
        });
      }

      return NextResponse.json({
        success: true,
        posts,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      });
    }

    // 6. Public blog detail: /api/blogs/:slug
    if (route[0] === 'blogs' && route.length === 2) {
      const slug = decodeURIComponent(route[1]);
      const [rows]: any = await pool.query(
        `SELECT p.*, c.category_name, c.category_slug 
         FROM posts p 
         LEFT JOIN category c ON p.category_id = c.category_id 
         WHERE (p.post_slug = ? OR p.post_id = ?) AND p.post_status = 'published'
         LIMIT 1`,
        [slug, isNaN(Number(slug)) ? 0 : Number(slug)]
      );

      if (!rows || rows.length === 0) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }

      const post = rows[0];

      const [tags]: any = await pool.query(
        `SELECT t.tag_id, t.tag_name, t.tag_slug 
         FROM post_tags pt 
         INNER JOIN tags t ON pt.tag_id = t.tag_id 
         WHERE pt.post_id = ?`,
        [post.post_id]
      );
      post.tags = tags;

      const [related]: any = await pool.query(
        `SELECT p.post_id, p.post_slug, p.post_title, p.image_path, p.created_at, c.category_name
         FROM posts p
         LEFT JOIN category c ON p.category_id = c.category_id
         WHERE p.post_status = 'published' AND p.post_id != ?
         ORDER BY (p.category_id = ?) DESC, p.created_at DESC
         LIMIT 3`,
        [post.post_id, post.category_id || 0]
      );

      const [prevPost]: any = await pool.query(
        `SELECT post_title, post_slug FROM posts WHERE post_id < ? AND post_status = 'published' ORDER BY post_id DESC LIMIT 1`,
        [post.post_id]
      );
      const [nextPost]: any = await pool.query(
        `SELECT post_title, post_slug FROM posts WHERE post_id > ? AND post_status = 'published' ORDER BY post_id ASC LIMIT 1`,
        [post.post_id]
      );

      return NextResponse.json({
        success: true,
        post,
        related,
        navigation: {
          prev: prevPost[0] || null,
          next: nextPost[0] || null,
        },
      });
    }

    // ========================================================================
    // Admin Protected Routes
    // ========================================================================
    const user = getAuthUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: Access token missing or invalid' }, { status: 401 });
    }

    // 7. Admin stats: /api/admin/stats
    if (path === 'admin/stats') {
      const [postStats]: any = await pool.query(
        `SELECT 
          COUNT(*) as total_posts,
          SUM(CASE WHEN post_status = 'published' THEN 1 ELSE 0 END) as published_posts,
          SUM(CASE WHEN post_status = 'draft' THEN 1 ELSE 0 END) as draft_posts
         FROM posts`
      );
      const [catStats]: any = await pool.query('SELECT COUNT(*) as total_categories FROM category');
      const [tagStats]: any = await pool.query('SELECT COUNT(*) as total_tags FROM tags');
      const [userStats]: any = await pool.query('SELECT COUNT(*) as total_users FROM users');

      const [recentPosts]: any = await pool.query(
        `SELECT p.post_id, p.post_slug, p.post_title, p.post_status, p.created_at, c.category_name
         FROM posts p
         LEFT JOIN category c ON p.category_id = c.category_id
         ORDER BY p.created_at DESC
         LIMIT 5`
      );

      return NextResponse.json({
        success: true,
        stats: {
          totalPosts: Number(postStats[0]?.total_posts || 0),
          publishedPosts: Number(postStats[0]?.published_posts || 0),
          draftPosts: Number(postStats[0]?.draft_posts || 0),
          totalCategories: Number(catStats[0]?.total_categories || 0),
          totalTags: Number(tagStats[0]?.total_tags || 0),
          totalUsers: Number(userStats[0]?.total_users || 0),
        },
        recentPosts,
      });
    }

    // 8. Admin blogs list: /api/admin/blogs
    if (path === 'admin/blogs') {
      const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
      const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '10')));
      const offset = (page - 1) * limit;

      const status = searchParams.get('status')?.trim() || null;
      const search = searchParams.get('search')?.trim() || null;
      const category = searchParams.get('category')?.trim() || null;

      const conditions = ['1=1'];
      const queryParams: any[] = [];

      if (status && status !== 'all') {
        conditions.push('p.post_status = ?');
        queryParams.push(status);
      }
      if (category) {
        conditions.push('p.category_id = ?');
        queryParams.push(Number(category));
      }
      if (search) {
        conditions.push('(p.post_title LIKE ? OR p.post_slug LIKE ? OR p.meta_description LIKE ?)');
        const wild = `%${search}%`;
        queryParams.push(wild, wild, wild);
      }

      const whereClause = conditions.join(' AND ');

      const [countResult]: any = await pool.query(
        `SELECT COUNT(*) as total FROM posts p WHERE ${whereClause}`,
        queryParams
      );
      const total = countResult[0]?.total || 0;

      const [posts]: any = await pool.query(
        `SELECT p.post_id, p.post_slug, p.post_title, p.author_name, p.post_status, p.image_path,
                p.created_at, p.updated_at, p.published_at,
                c.category_id, c.category_name, c.category_slug
         FROM posts p
         LEFT JOIN category c ON p.category_id = c.category_id
         WHERE ${whereClause}
         ORDER BY p.created_at DESC
         LIMIT ? OFFSET ?`,
        [...queryParams, limit, offset]
      );

      if (posts.length > 0) {
        const postIds = posts.map((p: any) => p.post_id);
        const [tagRows]: any = await pool.query(
          `SELECT pt.post_id, t.tag_id, t.tag_name, t.tag_slug
           FROM post_tags pt
           INNER JOIN tags t ON pt.tag_id = t.tag_id
           WHERE pt.post_id IN (?)`,
          [postIds]
        );

        const tagMap: Record<number, any[]> = {};
        tagRows.forEach((row: any) => {
          if (!tagMap[row.post_id]) tagMap[row.post_id] = [];
          tagMap[row.post_id].push({
            tag_id: row.tag_id,
            tag_name: row.tag_name,
            tag_slug: row.tag_slug,
          });
        });

        posts.forEach((post: any) => {
          post.tags = tagMap[post.post_id] || [];
        });
      }

      return NextResponse.json({
        success: true,
        posts,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      });
    }

    // 9. Admin single blog: /api/admin/blogs/:id
    if (route[0] === 'admin' && route[1] === 'blogs' && route.length === 3) {
      const postId = parseInt(route[2]);
      const [rows]: any = await pool.query(
        `SELECT p.*, c.category_name 
         FROM posts p 
         LEFT JOIN category c ON p.category_id = c.category_id 
         WHERE p.post_id = ? 
         LIMIT 1`,
        [postId]
      );

      if (!rows || rows.length === 0) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }

      const post = rows[0];
      const [tags]: any = await pool.query(
        `SELECT t.tag_id, t.tag_name, t.tag_slug 
         FROM post_tags pt 
         INNER JOIN tags t ON pt.tag_id = t.tag_id 
         WHERE pt.post_id = ?`,
        [postId]
      );
      post.tags = tags;

      return NextResponse.json({ success: true, post });
    }

    // 10. Admin categories: /api/admin/categories
    if (path === 'admin/categories') {
      const [categories]: any = await pool.query(
        `SELECT c.category_id, c.category_name, c.category_slug,
                COUNT(p.post_id) as total_posts
         FROM category c
         LEFT JOIN posts p ON c.category_id = p.category_id
         GROUP BY c.category_id, c.category_name, c.category_slug
         ORDER BY c.category_name ASC`
      );
      return NextResponse.json({ success: true, categories });
    }

    // 11. Admin tags: /api/admin/tags
    if (path === 'admin/tags') {
      const [tags]: any = await pool.query(
        `SELECT t.tag_id, t.tag_name, t.tag_slug, COUNT(pt.post_id) as total_posts
         FROM tags t
         LEFT JOIN post_tags pt ON t.tag_id = pt.tag_id
         GROUP BY t.tag_id, t.tag_name, t.tag_slug
         ORDER BY t.tag_name ASC`
      );
      return NextResponse.json({ success: true, tags });
    }

    // 12. Admin users: /api/admin/users
    if (path === 'admin/users') {
      const [users]: any = await pool.query(
        `SELECT id, username, email, name, role, created_at, last_login 
         FROM users 
         ORDER BY created_at DESC`
      );
      return NextResponse.json({ success: true, users });
    }

    return NextResponse.json({ error: 'Not Found', path }, { status: 404 });
  } catch (err: any) {
    console.error('API GET error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ============================================================================
// POST Handler
// ============================================================================
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ route?: string[] }> }
) {
  const { route = [] } = await params;
  const path = route.join('/');

  try {
    // 1. Login: /api/auth/login
    if (path === 'auth/login') {
      const body = await req.json();
      const { username, password } = body;
      if (!username || !password) {
        return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
      }

      const [rows]: any = await pool.query(
        'SELECT id, username, email, password, role FROM users WHERE username = ? OR email = ? LIMIT 1',
        [username.trim(), username.trim()]
      );

      if (!rows || rows.length === 0) {
        return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
      }

      const user = rows[0];
      const isValid = await verifyPassword(password, user.password);
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
      }

      await pool.query('UPDATE users SET last_login = NOW() WHERE id = ?', [user.id]);

      const sessionUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role || 'Administrator',
      };

      const token = jwt.sign(sessionUser, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

      const response = NextResponse.json({
        success: true,
        token,
        user: sessionUser,
      });

      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60,
      });

      return response;
    }

    // 2. Logout: /api/auth/logout
    if (path === 'auth/logout') {
      const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
      response.cookies.delete('admin_token');
      return response;
    }

    // ========================================================================
    // Protected Admin Routes
    // ========================================================================
    const user = getAuthUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: Access token missing or invalid' }, { status: 401 });
    }

    // 3. Upload image: /api/admin/upload
    if (path === 'admin/upload') {
      const formData = await req.formData();
      const singleFile = formData.get('image') as File | null;
      const contentFiles = formData.getAll('content_images') as File[];

      if (singleFile && singleFile.size > 0) {
        const buffer = Buffer.from(await singleFile.arrayBuffer());
        const mime = singleFile.type || 'image/jpeg';
        const base64Data = `data:${mime};base64,${buffer.toString('base64')}`;
        return NextResponse.json({
          success: true,
          url: base64Data,
          fileName: singleFile.name,
        });
      }

      if (contentFiles && contentFiles.length > 0) {
        const uploaded = await Promise.all(
          contentFiles.map(async (f) => {
            const buf = Buffer.from(await f.arrayBuffer());
            const mime = f.type || 'image/jpeg';
            return {
              url: `data:${mime};base64,${buf.toString('base64')}`,
              fileName: f.name,
            };
          })
        );
        return NextResponse.json({ success: true, images: uploaded });
      }

      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }

    // 4. Create blog: /api/admin/blogs
    if (path === 'admin/blogs') {
      const body = await req.json();
      const {
        title,
        content,
        slug,
        category_id,
        author_name,
        post_status = 'draft',
        meta_title,
        meta_description,
        meta_keyword,
        image_path,
        schema_data,
        tags = [],
      } = body;

      if (!title || !title.trim()) {
        return NextResponse.json({ error: 'Blog title is required' }, { status: 400 });
      }

      const cleanTitle = title.trim();
      let finalSlug = slug ? generateSlug(slug) : generateSlug(cleanTitle);

      const [existing]: any = await pool.query(
        'SELECT post_id FROM posts WHERE post_slug = ? LIMIT 1',
        [finalSlug]
      );
      if (existing.length > 0) {
        finalSlug = `${finalSlug}-${Date.now().toString().slice(-4)}`;
      }

      const cleanContent = cleanHtml(content);
      const cleanMetaTitle = meta_title?.trim() || cleanTitle;
      const cleanMetaDesc =
        meta_description?.trim() ||
        cleanContent.replace(/<[^>]*>?/gm, '').substring(0, 160);
      const cleanMetaKeyword = meta_keyword?.trim() || '';
      const cleanStatus = post_status === 'published' ? 'published' : 'draft';
      const publishedAt = cleanStatus === 'published' ? new Date() : null;
      const cleanAuthor = author_name?.trim() || null;

      const [result]: any = await pool.query(
        `INSERT INTO posts 
         (post_title, post_content, post_slug, category_id, author_name, meta_title, meta_description, meta_keyword, 
          image_path, schema_data, post_status, created_at, updated_at, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)`,
        [
          cleanTitle,
          cleanContent,
          finalSlug,
          category_id ? Number(category_id) : null,
          cleanAuthor,
          cleanMetaTitle,
          cleanMetaDesc,
          cleanMetaKeyword,
          image_path || null,
          schema_data || null,
          cleanStatus,
          publishedAt,
        ]
      );

      const postId = result.insertId;

      if (Array.isArray(tags) && tags.length > 0) {
        for (const tagItem of tags) {
          let tagId = null;
          const tagName = typeof tagItem === 'string' ? tagItem.trim() : tagItem.tag_name?.trim();
          if (!tagName) continue;

          const tagSlug = generateSlug(tagName);
          const [existingTag]: any = await pool.query(
            'SELECT tag_id FROM tags WHERE tag_slug = ? LIMIT 1',
            [tagSlug]
          );

          if (existingTag.length > 0) {
            tagId = existingTag[0].tag_id;
          } else {
            const [insertTag]: any = await pool.query(
              'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
              [tagName, tagSlug]
            );
            tagId = insertTag.insertId;
          }

          if (tagId) {
            await pool.query(
              'INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)',
              [postId, tagId]
            );
          }
        }
      }

      return NextResponse.json({
        success: true,
        message: 'Blog post created successfully',
        post_id: postId,
        slug: finalSlug,
      });
    }

    // 5. Create category: /api/admin/categories
    if (path === 'admin/categories') {
      const body = await req.json();
      const { category_name } = body;
      if (!category_name || !category_name.trim()) {
        return NextResponse.json({ error: 'Category name is required' }, { status: 400 });
      }

      const cleanName = category_name.trim();
      const slug = generateSlug(cleanName);

      const [existing]: any = await pool.query(
        'SELECT category_id FROM category WHERE category_slug = ? OR category_name = ? LIMIT 1',
        [slug, cleanName]
      );

      if (existing.length > 0) {
        return NextResponse.json({
          success: true,
          category_id: existing[0].category_id,
          category_name: cleanName,
          category_slug: slug,
          existing: true,
        });
      }

      const [result]: any = await pool.query(
        'INSERT INTO category (category_name, category_slug) VALUES (?, ?)',
        [cleanName, slug]
      );

      return NextResponse.json({
        success: true,
        category_id: result.insertId,
        category_name: cleanName,
        category_slug: slug,
      });
    }

    // 6. Create tag: /api/admin/tags
    if (path === 'admin/tags') {
      const body = await req.json();
      const { tag_name } = body;
      if (!tag_name || !tag_name.trim()) {
        return NextResponse.json({ error: 'Tag name is required' }, { status: 400 });
      }

      const cleanName = tag_name.trim();
      const slug = generateSlug(cleanName);

      const [existing]: any = await pool.query(
        'SELECT tag_id FROM tags WHERE tag_slug = ? OR tag_name = ? LIMIT 1',
        [slug, cleanName]
      );

      if (existing.length > 0) {
        return NextResponse.json({
          success: true,
          tag_id: existing[0].tag_id,
          tag_name: cleanName,
          tag_slug: slug,
          existing: true,
        });
      }

      const [result]: any = await pool.query(
        'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
        [cleanName, slug]
      );

      return NextResponse.json({
        success: true,
        tag_id: result.insertId,
        tag_name: cleanName,
        tag_slug: slug,
      });
    }

    // 7. Create user: /api/admin/users
    if (path === 'admin/users') {
      const body = await req.json();
      const { username, email, password, name, role = 'Administrator' } = body;
      if (!username || !email || !password) {
        return NextResponse.json({ error: 'Username, email and password are required' }, { status: 400 });
      }

      const [existing]: any = await pool.query(
        'SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1',
        [username.trim(), email.trim()]
      );
      if (existing.length > 0) {
        return NextResponse.json({ error: 'Username or email already in use' }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const [result]: any = await pool.query(
        `INSERT INTO users (username, email, password, name, role, created_at)
         VALUES (?, ?, ?, ?, ?, NOW())`,
        [username.trim(), email.trim(), hashedPassword, name?.trim() || null, role]
      );

      return NextResponse.json({
        success: true,
        message: 'User created successfully',
        id: result.insertId,
      });
    }

    return NextResponse.json({ error: 'Not Found', path }, { status: 404 });
  } catch (err: any) {
    console.error('API POST error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ============================================================================
// PUT Handler
// ============================================================================
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ route?: string[] }> }
) {
  const { route = [] } = await params;

  try {
    const user = getAuthUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Update blog: /api/admin/blogs/:id
    if (route[0] === 'admin' && route[1] === 'blogs' && route.length === 3) {
      const postId = parseInt(route[2]);
      const body = await req.json();
      const {
        title,
        content,
        slug,
        category_id,
        author_name,
        post_status,
        meta_title,
        meta_description,
        meta_keyword,
        image_path,
        schema_data,
        tags = [],
      } = body;

      if (!title || !title.trim()) {
        return NextResponse.json({ error: 'Blog title is required' }, { status: 400 });
      }

      const cleanTitle = title.trim();
      let finalSlug = slug ? generateSlug(slug) : generateSlug(cleanTitle);

      const [existing]: any = await pool.query(
        'SELECT post_id FROM posts WHERE post_slug = ? AND post_id != ? LIMIT 1',
        [finalSlug, postId]
      );
      if (existing.length > 0) {
        finalSlug = `${finalSlug}-${postId}`;
      }

      const cleanContent = cleanHtml(content);
      const cleanMetaTitle = meta_title?.trim() || cleanTitle;
      const cleanMetaDesc =
        meta_description?.trim() ||
        cleanContent.replace(/<[^>]*>?/gm, '').substring(0, 160);
      const cleanMetaKeyword = meta_keyword?.trim() || '';
      const cleanStatus = post_status === 'published' ? 'published' : 'draft';
      const cleanAuthor = author_name !== undefined ? (author_name?.trim() || null) : undefined;

      const [current]: any = await pool.query(
        'SELECT post_status, published_at FROM posts WHERE post_id = ?',
        [postId]
      );
      let publishedAt = current[0]?.published_at;
      if (cleanStatus === 'published' && !publishedAt) {
        publishedAt = new Date();
      }

      await pool.query(
        `UPDATE posts SET 
          post_title = ?,
          post_content = ?,
          post_slug = ?,
          category_id = ?,
          author_name = COALESCE(?, author_name),
          meta_title = ?,
          meta_description = ?,
          meta_keyword = ?,
          image_path = COALESCE(?, image_path),
          schema_data = ?,
          post_status = ?,
          published_at = ?,
          updated_at = NOW()
         WHERE post_id = ?`,
        [
          cleanTitle,
          cleanContent,
          finalSlug,
          category_id ? Number(category_id) : null,
          cleanAuthor,
          cleanMetaTitle,
          cleanMetaDesc,
          cleanMetaKeyword,
          image_path || null,
          schema_data || null,
          cleanStatus,
          publishedAt,
          postId,
        ]
      );

      await pool.query('DELETE FROM post_tags WHERE post_id = ?', [postId]);

      if (Array.isArray(tags) && tags.length > 0) {
        for (const tagItem of tags) {
          let tagId = null;
          const tagName = typeof tagItem === 'string' ? tagItem.trim() : tagItem.tag_name?.trim();
          if (!tagName) continue;

          const tagSlug = generateSlug(tagName);
          const [existingTag]: any = await pool.query(
            'SELECT tag_id FROM tags WHERE tag_slug = ? LIMIT 1',
            [tagSlug]
          );

          if (existingTag.length > 0) {
            tagId = existingTag[0].tag_id;
          } else {
            const [insertTag]: any = await pool.query(
              'INSERT INTO tags (tag_name, tag_slug) VALUES (?, ?)',
              [tagName, tagSlug]
            );
            tagId = insertTag.insertId;
          }

          if (tagId) {
            await pool.query(
              'INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)',
              [postId, tagId]
            );
          }
        }
      }

      return NextResponse.json({
        success: true,
        message: 'Post updated successfully',
        post_id: postId,
        slug: finalSlug,
      });
    }

    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  } catch (err: any) {
    console.error('API PUT error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ============================================================================
// DELETE Handler
// ============================================================================
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ route?: string[] }> }
) {
  const { route = [] } = await params;
  const path = route.join('/');
  const { searchParams } = new URL(req.url);

  try {
    const user = getAuthUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 1. Delete blog: /api/admin/blogs/:id
    if (route[0] === 'admin' && route[1] === 'blogs' && route.length === 3) {
      const postId = parseInt(route[2]);
      await pool.query('DELETE FROM post_tags WHERE post_id = ?', [postId]);
      const [result]: any = await pool.query('DELETE FROM posts WHERE post_id = ?', [postId]);

      if (result.affectedRows === 0) {
        return NextResponse.json({ error: 'Post not found or already deleted' }, { status: 404 });
      }

      return NextResponse.json({ success: true, message: 'Post deleted successfully' });
    }

    // 2. Delete category: /api/admin/categories?id=...
    if (path === 'admin/categories') {
      const id = parseInt(searchParams.get('id') || '0');
      if (!id) return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });

      await pool.query('UPDATE posts SET category_id = NULL WHERE category_id = ?', [id]);
      await pool.query('DELETE FROM category WHERE category_id = ?', [id]);
      return NextResponse.json({ success: true, message: 'Category deleted successfully' });
    }

    // 3. Delete user: /api/admin/users?id=...
    if (path === 'admin/users') {
      const deleteId = parseInt(searchParams.get('id') || '0');
      if (!deleteId) return NextResponse.json({ error: 'User ID is required' }, { status: 400 });

      if (deleteId === user.id) {
        return NextResponse.json({ error: 'You cannot delete yourself' }, { status: 400 });
      }

      const [target]: any = await pool.query('SELECT role FROM users WHERE id = ?', [deleteId]);
      if (target.length === 0) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      if (target[0].role === 'Developer' && user.role !== 'Developer') {
        return NextResponse.json({ error: 'Access Denied: You cannot delete a Developer account' }, { status: 403 });
      }

      await pool.query('DELETE FROM users WHERE id = ?', [deleteId]);
      return NextResponse.json({ success: true, message: 'User deleted successfully' });
    }

    return NextResponse.json({ error: 'Not Found', path }, { status: 404 });
  } catch (err: any) {
    console.error('API DELETE error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
