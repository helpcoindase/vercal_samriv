'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BLOGS } from '@/data/blog';
import BlogAccordion from './BlogAccordion';
import { ASSET_PREFIX } from 'config';
import { fetchApi, getImageUrl } from '@/lib/api';
import { Calendar, User, Tag, ArrowLeft, Share2, Sparkles, Clock, CheckCircle } from 'lucide-react';

type BlogContentProps = {
    slug: string;
};

interface DynamicPost {
    post_id: number;
    post_slug: string;
    post_title: string;
    author_name?: string;
    post_content: string;
    meta_title?: string;
    meta_description?: string;
    image_path?: string;
    created_at?: string;
    category_name?: string;
    schema_data?: string;
    tags?: { tag_id: number; tag_name: string; tag_slug: string }[];
    related?: any[];
}

export default function BlogDetail({ slug }: BlogContentProps) {
    const [livePost, setLivePost] = useState<DynamicPost | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    // Fetch from Backend API
    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        fetchApi(`/api/blogs/${slug}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (!isMounted) return;
                if (data?.post) {
                    setLivePost(data.post);
                    if (data.related) setRelatedPosts(data.related);
                }
                setLoading(false);
            })
            .catch(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [slug]);

    // Check static fallback if live post is not found
    const staticBlog = BLOGS.find((b) => b.slug === slug);

    const handleShare = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    // If live post found in MySQL Database:
    if (livePost) {
        const formattedDate = livePost.created_at
            ? new Date(livePost.created_at).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
              })
            : 'Recent';

        return (
            <>
                {/* JSON-LD Schema injection */}
                {livePost.schema_data && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: livePost.schema_data }}
                    />
                )}

                <main className="max-w-[120rem] xl:w-[100%] mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] justify-between gap-[40px] md:gap-[60px] xl:gap-[70px]">
                        {/* Main Content Column */}
                        <div className="w-full lg:w-[95%] mx-auto">
                            {/* Category Badge & Meta */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                {livePost.category_name && (
                                    <span className="bg-[#eaf5ef] text-[#0e382f] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#72d9bc]/40">
                                        {livePost.category_name}
                                    </span>
                                )}
                                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                    <Calendar className="w-3.5 h-3.5 text-[#0e382f]" />
                                    <span>{formattedDate}</span>
                                </div>
                                {livePost.author_name && (
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                        <User className="w-3.5 h-3.5 text-[#0e382f]" />
                                        <span>{livePost.author_name}</span>
                                    </div>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-[26px] leading-[34px] sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[42px] lg:leading-[50px] font-serif font-bold text-[#111] mb-[30px] tracking-tight">
                                {livePost.post_title}
                            </h1>

                            {/* Hero Image */}
                            {livePost.image_path && (
                                <div className="w-full overflow-hidden h-[280px] sm:h-[380px] lg:h-[460px] rounded-[20px] group mb-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-gray-100">
                                    <img
                                        src={getImageUrl(livePost.image_path)}
                                        alt={livePost.post_title}
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).src = '/assets/images/blog-1.webp';
                                        }}
                                    />
                                </div>
                            )}

                            {/* Post Content */}
                            <div
                                className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-sans [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-[#0e382f] [&>h3]:text-xl [&>h3]:font-serif [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-[#154a3e] [&>p]:mb-5 [&>p]:text-[16px] sm:[&>p]:text-[17px] [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-[#72d9bc] [&>blockquote]:bg-[#f4fbf8] [&>blockquote]:p-4 [&>blockquote]:rounded-r-lg [&>blockquote]:italic [&>img]:rounded-xl [&>img]:my-6 [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table_th]:bg-[#eaf5ef] [&>table_th]:p-3 [&>table_th]:border [&>table_td]:p-3 [&>table_td]:border"
                                dangerouslySetInnerHTML={{ __html: livePost.post_content }}
                            />

                            {/* Tags list */}
                            {livePost.tags && livePost.tags.length > 0 && (
                                <div className="mt-10 pt-6 border-t border-gray-200">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                                        <Tag className="w-3.5 h-3.5" /> Topic Tags
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {livePost.tags.map((t) => (
                                            <span
                                                key={t.tag_id}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-[#f0f4f2] text-gray-700 border border-gray-200"
                                            >
                                                #{t.tag_name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share button */}
                            <div className="mt-8 flex items-center justify-between p-4 rounded-2xl bg-[#f7faf8] border border-gray-100">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e382f] hover:underline"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Back to Articles
                                </Link>
                                <button
                                    onClick={handleShare}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-[#eaf5ef] transition cursor-pointer shadow-sm"
                                >
                                    {copied ? (
                                        <>
                                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                            Link Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Share2 className="w-3.5 h-3.5 text-[#0e382f]" />
                                            Share Article
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div>
                            <div className="sticky top-[100px] space-y-[30px]">
                                {/* Recent Articles */}
                                <div className="p-6 rounded-3xl bg-[#fbfdfc] border border-[#72d9bc]/30 shadow-sm">
                                    <h3 className="text-[#0e382f] mb-[20px] text-[20px] leading-[26px] font-serif font-bold flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-[#72d9bc]" />
                                        Related Articles
                                    </h3>

                                    <div className="space-y-[14px] w-full">
                                        {(relatedPosts.length > 0 ? relatedPosts : BLOGS.slice(0, 3)).map((item: any) => (
                                            <Link
                                                key={item.post_id || item.id}
                                                href={`/blog/${item.post_slug || item.slug}`}
                                                className="block group p-3.5 rounded-2xl border border-gray-100 bg-white hover:border-[#72d9bc] hover:bg-[#bff1df]/20 transition-all duration-300 shadow-xs"
                                            >
                                                <h4 className="line-clamp-2 text-[#111] text-[15px] font-semibold leading-[22px] group-hover:text-[#0e382f] transition-colors">
                                                    {item.post_title || item.title}
                                                </h4>
                                                <p className="text-[12px] text-gray-500 mt-1.5 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3 text-[#0e382f]" />
                                                    {item.created_at
                                                        ? new Date(item.created_at).toLocaleDateString('en-US', {
                                                              month: 'short',
                                                              day: 'numeric',
                                                              year: 'numeric',
                                                          })
                                                        : item.date || 'Recent'}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <Link
                                            href="/blog"
                                            className="block text-center py-2.5 rounded-xl bg-[#0e382f] text-white text-xs font-semibold hover:bg-[#1a5344] transition shadow-xs"
                                        >
                                            View All Blogs
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }

    // Static fallback if static article exists
    if (staticBlog) {
        return (
            <main className="max-w-[120rem] xl:w-[100%] mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] justify-between gap-[40px] md:gap-[60px] xl:gap-[70px]">
                    <div className="w-full lg:w-[95%] mx-auto">
                        <div className="flex items-center gap-2 mb-3 text-xs text-[#c25400] font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{staticBlog.date}</span>
                        </div>

                        <h1 className="text-[26px] leading-[34px] sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[42px] lg:leading-[50px] font-serif font-bold text-[#151515] mb-[30px]">
                            {staticBlog.title}
                        </h1>

                        <div className="w-full overflow-hidden h-[280px] sm:h-[380px] lg:h-[450px] rounded-[16px] group mb-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                            <img
                                src={`${ASSET_PREFIX}${staticBlog.image}`}
                                alt={staticBlog.title}
                                className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-700"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            {staticBlog.Contenttype === 'normal' ? (
                                <div className="whitespace-pre-wrap text-[16px] leading-[26px] text-gray-800 mb-[40px]">
                                    {staticBlog.content}
                                </div>
                            ) : (
                                <div className="mb-[40px]">{staticBlog.content}</div>
                            )}
                        </div>

                        {staticBlog.accordion && staticBlog.accordion.length > 0 && (
                            <BlogAccordion items={staticBlog.accordion} />
                        )}

                        {staticBlog.content2 && (
                            <div className="prose prose-lg max-w-none mt-[40px]">
                                {staticBlog.content2}
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="sticky top-[100px] p-6 rounded-3xl bg-[#fbfdfc] border border-[#72d9bc]/30">
                            <h3 className="text-[#0e382f] mb-[20px] text-[20px] font-serif font-bold">
                                Recent Blogs
                            </h3>
                            <div className="space-y-[12px]">
                                {BLOGS.slice(-3).reverse().map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/blog/${item.slug}`}
                                        className="block p-3.5 rounded-xl border border-gray-100 bg-white hover:border-[#72d9bc] hover:bg-[#bff1df]/20 transition"
                                    >
                                        <h4 className="line-clamp-2 text-sm font-semibold text-gray-900 mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // Loading / Not Found State
    if (loading) {
        return (
            <div className="py-24 text-center">
                <div className="w-10 h-10 border-4 border-[#0e382f] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-sm text-gray-500">Loading article...</p>
            </div>
        );
    }

    return (
        <div className="py-24 text-center max-w-md mx-auto">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Article Not Found</h2>
            <p className="text-sm text-gray-500 mb-6">
                The blog post you are looking for may have been moved or unpublished.
            </p>
            <Link
                href="/blog"
                className="inline-block px-6 py-2.5 rounded-xl bg-[#0e382f] text-white text-sm font-semibold hover:bg-[#1a5344] transition"
            >
                Browse All Articles
            </Link>
        </div>
    );
}
