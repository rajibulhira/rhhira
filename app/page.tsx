import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Company } from "@/components/Company";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Company />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
