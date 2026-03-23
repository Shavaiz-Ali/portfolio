import Hero from "@/components/hero";
import Quote from "@/components/quote";
import Wrapper from "@/components/wrapper";

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
      </Wrapper>
    </main>
  );
}
