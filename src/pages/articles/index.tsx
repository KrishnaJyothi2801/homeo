import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { datoClient } from "@/lib/datocms";

interface Article {
    title: string;
    slug: string;
    author: string;
    publishedDate: string;
}

interface ArticlesProps {
    articles: Article[];
}

export default function Articles({ articles }: ArticlesProps) {
    return (
        <Layout>
            <Head>
                <title>Articles | Dr. Siva's Multi-speciality Homoeo Clinic</title>

                <meta
                    name="description"
                    content="Read informative articles about homeopathy, wellness, preventive care, and natural healing."
                />

                <link
                    rel="canonical"
                    href="https://drsivashomeo.webaglet.in/articles"
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br bg-[#01418C] py-40">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
                    </div>

                    <div className="container relative mx-auto px-4 text-center">
                        <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
                            Dr. Siva's Health Journal
                        </span>

                        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl">
                            Health Articles & Wellness Insights
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
                            Health information, homeopathy insights, preventive
                            healthcare tips, and wellness guidance from Dr. Siva's
                            Multi-speciality Homoeo Clinic.
                        </p>
                    </div>
                </section>

                {/* Articles */}
                <section className="bg-[#e8f7fc] py-20 px-2 md:px-8 lg:px-16">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 flex items-center justify-between">
                            <div>
                                <h2 className="text-4xl font-bold text-[#03045e]">
                                    Latest Articles
                                </h2>

                                <p className="mt-3 text-gray-600">
                                    Browse our latest healthcare and wellness publications.
                                </p>
                            </div>
                        </div>

                        {articles.length === 0 ? (
                            <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 py-20 text-center">
                                <h3 className="text-2xl font-semibold text-[#03045e]">
                                    No Articles Available
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    Published articles will appear here.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                                {articles.map((article) => (
                                    <Link
                                        key={article.slug}
                                        href={`/articles/${article.slug}`}
                                        className="group"
                                    >
                                        <article className="h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                            <div className="h-2 bg-gradient-to-r from-[#0077b6] to-[#00b4d8]" />

                                            <div className="p-8">
                                                <div className="mb-6 flex items-center justify-between">
                                                    <span className="rounded-full bg-[#e8f7fc] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#0077b6]">
                                                        Health Article
                                                    </span>
                                                </div>

                                                <h3 className="mb-6 text-2xl font-bold leading-snug text-[#03045e] transition-colors group-hover:text-[#0077b6]">
                                                    {article.title}
                                                </h3>

                                                <div className="mb-8 border-t border-gray-100 pt-5">
                                                    <div className="text-sm font-medium text-gray-700">
                                                        {article.author}
                                                    </div>

                                                    <div className="mt-2 text-sm text-gray-500">
                                                        {new Date(article.publishedDate).toLocaleDateString(
                                                            "en-IN",
                                                            {
                                                                day: "numeric",
                                                                month: "long",
                                                                year: "numeric",
                                                            }
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex items-center font-semibold text-[#0077b6]">
                                                    Read Article
                                                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                                                        →
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    const data = await datoClient.request(`
    {
      allArticles(orderBy: publishedDate_DESC) {
        title
        slug
        author
        publishedDate
      }
    }
  `);

    return {
        props: {
            articles: data.allArticles,
        },
    };
}