import Header from "../../components/layout/Header";
import BlogDetail from "../../components/Blog/BlogDetail";
import Footer1 from "../../components/layout/Footer";
import { BLOGS } from "@/data/blog";
import { getMeta } from "@/lib/getMeta";
import Getquote from "../../components/layout/Getquote";
import Blogbanner from "../../components/Blog/Blogbanner";
import Breadcrumbs from "../../components/layout/Breadcrumbs";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const staticSlugs = BLOGS.map((item) => ({
        slug: item.slug,
    }));

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/blogs?limit=100`, { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data?.posts && Array.isArray(data.posts)) {
                const dbSlugs = data.posts
                    .filter((p: any) => p.post_slug)
                    .map((p: any) => ({ slug: p.post_slug }));

                const slugSet = new Set<string>();
                const combined: { slug: string }[] = [];
                [...dbSlugs, ...staticSlugs].forEach((item) => {
                    if (!slugSet.has(item.slug)) {
                        slugSet.add(item.slug);
                        combined.push(item);
                    }
                });
                return combined;
            }
        }
    } catch {
        // Fallback to static mock blogs
    }

    return staticSlugs;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;

    const blog = BLOGS.find((b) => b.slug === slug);

    if (blog) {
        return getMeta(`/blog/${slug}`);
    }

    const titleFormatted = slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return {
        title: `${titleFormatted} | Samwarthika Rivera`,
        description: `Read about ${titleFormatted} and authentic Ayurvedic treatments at Samwarthika Rivera Kerala.`,
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const blog = BLOGS.find((b) => b.slug === slug);
    const title = blog?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <div>
            <Header />

            <div>
                <Blogbanner slug="blog" />
            </div>

            <main className="bg-[linear-gradient(180deg,_#fff_1%,_#E8EAEC_100%)]">
                <div className="relative z-20 pt-[20px] sm:pt-[10px] xl:pt-[0]">
                    <Breadcrumbs pageKey="blog" currentTitle={title} />
                </div>

                <section className="py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[100px] bg-[#fff]">
                    <div className="container mx-auto w-[90%] mx-auto max-w-[120rem] h-full">
                        <BlogDetail slug={slug} />
                    </div>
                </section>

                <Getquote />

                <section>
                    <div className="bg-[#000]">
                        <Footer1 />
                    </div>
                </section>
            </main>
        </div>
    );
}