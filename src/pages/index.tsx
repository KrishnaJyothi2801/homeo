import Hero from "@/components/Hero";
import NewHero from "@/components/NewHero";
import Layout from "@/components/Layout";
import aboutAnimation from "@/assets/about.json";
import testimonials from "@/assets/testimonials.json";
import Header from "@/components/Header";
import Projects from "@/pages/projects";
import Services from "@/components/Serviecs";
import About from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <main>
        <NewHero />
        <Projects />
        <Services />
        <About />
      </main>
    </Layout>
  );
}
