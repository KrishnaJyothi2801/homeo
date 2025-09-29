import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Dr. [Name] - Homeopathy Clinic"
        description="Experienced homeopathy doctor offering personalized treatments. Book an appointment online."
        openGraph={{
          type: "website",
          locale: "en_IN",
          url: "https://yourdomain.com",
          siteName: "Dr. [Name] Homeopathy",
        }}
      />
      <Navbar />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
