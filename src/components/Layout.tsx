import ContactFloatButtons from "./ContactFloatButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans overflow-x-hidden">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <title>Dr. Siva's Multi-speciality Homoeo Clinic</title>
        <meta
          name="description"
          content="Providing trusted and holistic homeopathic care for over 31 years. Experience natural healing with Dr. Siva's Multi-speciality Homoeo Clinic."
        />
        <meta
          name="keywords"
          content="homeopathy, dr siva, homoeo clinic, natural healing, holistic care, homeopathic medicine"
        />
        <meta
          property="og:site_name"
          content="Dr. Siva's Multi-speciality Homoeo Clinic"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Navbar />
      <main className="w-full">{children}</main>
      <ContactFloatButtons />
      <Footer />
    </div>
  );
}
