'use client';

import { BLOGS } from '@/data/blog';
import Getquote from '../layout/Getquote';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ASSET_PREFIX } from 'config';
import { fetchApi, getImageUrl } from '@/lib/api';
import { Search, Tag, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';

interface PostItem {
    id: number | string;
    slug: string;
    title: string;
    date: string;
    image: string;
    category?: string;
    author?: string;
    excerpt?: string;
}

export default function BlogListing() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [livePosts, setLivePosts] = useState<PostItem[]>([]);
    const [categories, setCategories] = useState<{ id: number; name: string; slug: string }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 1024 ? 4 : 6);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fetch dynamic posts from MySQL Backend API
    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        Promise.all([
            fetchApi('/api/blogs?limit=50')
                .then((res) => (res.ok ? res.json() : null))
                .catch(() => null),
            fetchApi('/api/categories')
                .then((res) => (res.ok ? res.json() : null))
                .catch(() => null),
        ])
            .then(([blogData, catData]) => {
                if (!isMounted) return;

                if (catData?.categories) {
                    setCategories(
                        catData.categories.map((c: any) => ({
                            id: c.category_id,
                            name: c.category_name,
                            slug: c.category_slug,
                        }))
                    );
                }

                if (blogData?.posts && blogData.posts.length > 0) {
                    const formatted = blogData.posts.map((p: any) => ({
                        id: p.post_id,
                        slug: p.post_slug,
                        title: p.post_title,
                        date: new Date(p.created_at || Date.now()).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        }),
                        image: getImageUrl(p.image_path),
                        category: p.category_name,
                        author: p.author_name || 'Ayurveda Expert',
                        excerpt: p.meta_description || '',
                    }));
                    setLivePosts(formatted);
                }
                setLoading(false);
            })
            .catch(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    // Merge or fallback to static data if live data is not yet available
    const allPosts: PostItem[] = useMemo(() => {
        if (livePosts.length > 0) {
            return livePosts;
        }
        return BLOGS.map((item: any) => ({
            id: item.id,
            slug: item.slug,
            title: item.title,
            date: item.date,
            image: item.image?.startsWith('http') ? item.image : `${ASSET_PREFIX}${item.image}`,
            category: item.category || 'Ayurveda Retreat',
            author: 'Samwarthika Rivera Team',
            excerpt: typeof item.content === 'string' ? item.content.substring(0, 150) : '',
        }));
    }, [livePosts]);

    const filteredPosts = useMemo(() => {
        return allPosts.filter((item) => {
            const matchesSearch =
                !searchTerm ||
                item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.excerpt && item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory =
                selectedCategory === 'all' ||
                item.category?.toLowerCase() === selectedCategory.toLowerCase();

            return matchesSearch && matchesCategory;
        });
    }, [allPosts, searchTerm, selectedCategory]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, itemsPerPage]);

    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredPosts, currentPage, itemsPerPage]);

    return (
        <main className="bg-white">
            <section className="pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[70px] bg-[#fff]">
                <div className="container mx-auto w-[90%] max-w-[120rem] h-full">

                    {/* Filter and Search Bar */}
                    <div className="mb-[40px] flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-6">
                        {/* Categories Pills */}
                        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                                    selectedCategory === 'all'
                                        ? 'bg-[#0e382f] text-white shadow-md'
                                        : 'bg-[#f4f7f5] text-gray-700 hover:bg-[#e4ede7]'
                                }`}
                            >
                                All Articles
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                                        selectedCategory.toLowerCase() === cat.name.toLowerCase()
                                            ? 'bg-[#0e382f] text-white shadow-md'
                                            : 'bg-[#f4f7f5] text-gray-700 hover:bg-[#e4ede7]'
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[#72d9bc] focus:ring-2 focus:ring-[#72d9bc]/20 transition bg-white text-gray-800 placeholder:text-gray-400"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        </div>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:w-[95%] mx-auto">
                        {paginatedPosts.map((item: any, index: number) => (
                            <Link
                                key={item.id ?? index}
                                href={`/blog/${item.slug}`}
                                className="block"
                            >
                                <article className="group h-full overflow-hidden rounded-[20px] border border-[#72d9bc] bg-white transition-all duration-500 hover:bg-[#bff1df] shadow-sm hover:shadow-md flex flex-col justify-between">
                                    <div>
                                        <div className="pt-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:pt-[24px]">
                                            <div className="overflow-hidden rounded-t-[16px] relative h-[260px] max-xl:h-[230px] max-sm:h-[200px] w-full bg-gray-100">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.06]"
                                                    onError={(e) => {
                                                        (e.currentTarget as HTMLImageElement).src = '/assets/images/blog-1.webp';
                                                    }}
                                                />
                                                {item.category && (
                                                    <span className="absolute top-3 left-3 bg-[#0e382f]/85 backdrop-blur-md text-[#72d9bc] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                                        {item.category}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="bg-white px-[32px] py-[28px] transition-all duration-500 group-hover:bg-[#bff1df] max-xl:px-[24px] max-xl:py-[24px] max-sm:px-[20px] max-sm:py-[20px]">
                                            <div className="flex items-center gap-2 mb-[16px] text-xs text-[#c25400] font-heading font-medium">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{item.date}</span>
                                            </div>

                                            <h3 className="text-[20px] font-[600] leading-[28px] text-[#111] max-xl:text-[18px] max-xl:leading-[26px] line-clamp-2 group-hover:text-[#0e382f] transition-colors">
                                                {item.title}
                                            </h3>

                                            {item.excerpt && (
                                                <p className="mt-3 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                                    {item.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="px-[32px] pb-[24px] bg-white transition-all duration-500 group-hover:bg-[#bff1df] flex items-center justify-between border-t border-gray-100/60 pt-3 max-xl:px-[24px] max-sm:px-[20px]">
                                        <span className="text-xs font-semibold text-[#0e382f] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    {filteredPosts.length > 0 && totalPages > 1 && (
                        <div className="flex flex-wrap items-center justify-center gap-[10px] py-[40px] md:py-[50px]">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="cursor-pointer px-[16px] py-[10px] text-[14px] text-[#151515] transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 hover:text-[#0e382f]"
                            >
                                Prev
                            </button>

                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`min-w-[42px] h-[42px] rounded-full cursor-pointer px-[12px] text-[14px] font-semibold transition duration-300 ${
                                        currentPage === page
                                            ? 'bg-[#0e382f] text-white shadow-md'
                                            : 'bg-white text-[#151515] hover:bg-[#eaf4ee]'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="cursor-pointer px-[16px] py-[10px] text-[14px] text-[#151515] transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 hover:text-[#0e382f]"
                            >
                                Next
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredPosts.length === 0 && !loading && (
                        <div className="py-[60px] text-center">
                            <p className="mb-[20px] text-[16px] text-[#0009]">
                                No articles found matching your criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                    setCurrentPage(1);
                                }}
                                className="rounded-[10px] bg-[#0e382f] px-[24px] py-[12px] text-[14px] font-[600] text-white transition-all duration-300 hover:bg-[#1a5344] active:scale-95 shadow-md"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}

                </div>
            </section>
            <div className="pt-[40px] sm:pt-[50px] md:pt-[60px]"><Getquote /></div>
        </main>
    );
}