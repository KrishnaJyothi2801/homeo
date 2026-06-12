import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { StructuredText } from "react-datocms/structured-text";
import { datoClient } from "@/lib/datocms";

interface Article {
    title: string;
    slug: string;
    author: string;
    publishedDate: string;
    content: any;
}

interface ArticlePageProps {
    article: Article;
}

export default function ArticlePage({ article }: ArticlePageProps) {
    return (
        <Layout>
            <Head>
                <title>
                    {article.title} | Dr. Siva's Multi-speciality Homoeo Clinic
                </title>

                <meta
                    name="description"
                    content={article.title}
                />

                <link
                    rel="canonical"
                    href={`https://drsivashomeo.webaglet.in/articles/${article.slug}`}
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="bg-[#01418C] pt-36 pb-20">
                    <div className="container mx-auto max-w-4xl px-4">
                        <Link
                            href="/articles"
                            className="inline-flex items-center text-blue-100 hover:text-white transition mb-8"
                        >
                            ← Back to Articles
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                            {article.title}
                        </h1>

                        <div className="mt-8 flex flex-wrap gap-6 text-blue-100">
                            <span>
                                By {article.author}
                            </span>

                            <span>
                                {new Date(article.publishedDate).toLocaleDateString(
                                    "en-IN",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="bg-white py-20">
                    <div className="container mx-auto max-w-4xl px-4">

                        <article className="rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-lg border border-blue-100 p-8 md:p-12">

                            <div className="prose prose-lg max-w-none">
                                <div className="text-lg leading-relaxed text-gray-700 space-y-6">
                                    <StructuredText data={article.content} />
                                </div>
                            </div>

                        </article>

                        <div className="mt-12 text-center">
                            <Link
                                href="/articles"
                                className="inline-flex items-center rounded-full bg-[#01418C] px-6 py-3 text-white font-medium hover:bg-[#012f67] transition"
                            >
                                ← View All Articles
                            </Link>
                        </div>

                    </div>
                </section>
            </main>
        </Layout>
    );
}

export async function getStaticPaths() {
    const data = await datoClient.request(`
    {
      allArticles {
        slug
      }
    }
  `);

    const paths = data.allArticles.map((article: any) => ({
        params: {
            slug: article.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const data = await datoClient.request(
        `
query ArticleBySlug($slug: String) {
  article(filter: { slug: { eq: $slug } }) {
    title
    slug
    author
    publishedDate
    content {
      value
    }
  }
}
    `,
        {
            slug: params.slug,
        }
    );

    return {
        props: {
            article: data.article,
        },
    };
}