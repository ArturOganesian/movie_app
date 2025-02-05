import Hero from "@/app/components/Hero";
import PopularFilms from "./components/PopularFilms";
export default function Home() {
  return (
    <main>
      <Hero />

      <section className="px-[80px]">
        <PopularFilms />
      </section>
    </main>
  );
}
