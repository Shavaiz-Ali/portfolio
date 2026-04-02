import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Quote from "@/components/quote";
import Wrapper from "@/components/wrapper";
import Skills from "@/components/skills";
import AboutMe from "@/components/aboutMe";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <section>
          <Hero />
        </section>
        <section>
          <Quote />
        </section>
        <section className="mt-[140px]">
          <Projects />
        </section>
        <section className="mt-[109px]">
          <Skills />
        </section>
        <section className="mt-[109px]">
          <AboutMe />
        </section>
      </Wrapper>
    </main>
  );
}
