import { data } from "@/lib/data";
import { Chrome } from "@/components/Chrome";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeProvider";

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <Chrome />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Publications />
        <Contact />

        <footer className="foot mono">
          <span>
            © {new Date().getFullYear()} {data.name}
          </span>
          <ThemeToggle />
        </footer>
      </main>
    </>
  );
}
