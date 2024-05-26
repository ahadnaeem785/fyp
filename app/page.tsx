import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
    </main>
  );
}
