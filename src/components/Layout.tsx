"use client"

import { DiscussionEmbed } from "disqus-react";
import ContactFloatButtons from "./ContactFloatButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import Scripts from "./Scripts";

export default function Layout({ children }: { children: React.ReactNode }) {
  const article = {
    id: "services-page",
    url: "https://drsivashomeo.vercel.app/services",
    title: "Our Services | Dr. Siva's Multi-speciality Homoeo Clinic",
  };
  return (
    <div className="font-sans overflow-x-hidden">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <title>Dr. Siva's Multi-speciality Homoeo Clinic</title>
        <meta name="description" content="Providing trusted and holistic homeopathic care for over 31 years. Experience natural healing with Dr. Siva's Multi-speciality Homoeo Clinic." />
        <meta property="og:url" content="https://drsivashomeo.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta property="og:description" content="Providing trusted and holistic homeopathic care for over 31 years. Experience natural healing with Dr. Siva's Multi-speciality Homoeo Clinic." />
        <meta property="og:image" content="https://drsivashomeo.vercel.app/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="drsivashomeo.vercel.app" />
        <meta property="twitter:url" content="https://drsivashomeo.vercel.app/" />
        <meta name="twitter:title" content="Dr. Siva's Multi-speciality Homoeo Clinic" />
        <meta name="twitter:description" content="Providing trusted and holistic homeopathic care for over 31 years. Experience natural healing with Dr. Siva's Multi-speciality Homoeo Clinic." />
        <meta name="twitter:image" content="https://drsivashomeo.vercel.app/images/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Scripts />
      <Navbar />
      <main className="w-full">{children}</main>
      <ContactFloatButtons />
      {/* <section className="py-10 px-4">
        <DiscussionEmbed
          shortname="drsivashomeo"
          config={{
            url: article.url,
            identifier: article.id,
            title: article.title,
            language: "en_IN",
          }}
        />
      </section> */}
      <Footer />
    </div>
  );
}
