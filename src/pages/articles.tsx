import React from 'react';
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Articles() {
    return (
        <Layout>
            <Head>
                <title>Articles | Dr. Siva's Multi-speciality Homoeo Clinic</title>
                <meta
                    name="description"
                    content="Read informative articles about homeopathy, natural healing, and wellness at Dr. Siva's Multi-speciality Homoeo Clinic."
                />
                <meta
                    name="keywords"
                    content="homeopathy articles, homoeo blog, natural remedies, holistic health, wellness tips, homeopathic treatments"
                />
                <meta name="author" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
                <meta property="og:title" content="Articles | Dr. Siva's Multi-speciality Homoeo Clinic" />
                <meta
                    property="og:description"
                    content="Explore articles on homeopathic treatments, natural healing, and wellness."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://drsivashomeo.vercel.app/articles" />
                <link rel="canonical" href="https://drsivashomeo.vercel.app/articles" />
            </Head>

            <main className="pt-12">
                <section className="py-16 bg-[#caf0f8]">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-5xl font-bold text-[#03045e] my-6">
                            Articles
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-[#0077b6] mb-16">
                            Discover insightful articles on homeopathy, natural healing, and wellness.
                        </p>
                        <div className="inline-block px-8 py-3 bg-[#0077b6] text-white rounded-lg font-semibold hover:bg-[#03045e] transition">
                            Coming Soon
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}