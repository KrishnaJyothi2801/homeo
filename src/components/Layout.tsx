import ContactFloatButtons from "./ContactFloatButtons";
import Footer from "./Footer";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <main className="w-full">{children}</main>
      <ContactFloatButtons />
      <Contact />
      <Footer />
    </div>
  );
}
