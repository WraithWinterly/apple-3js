import Link from "next/link";
import Hero from "~/components/Hero";
import Highlights from "~/components/Highlights";
import Model from "~/components/Model";
import Navbar from "~/components/Navbar";

export default function HomePage() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}
