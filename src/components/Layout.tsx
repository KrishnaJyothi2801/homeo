import ContactFloatButtons from "./ContactFloatButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <main className="w-full">{children}</main>
      <ContactFloatButtons />
      <Footer />
    </div>
  );
}
