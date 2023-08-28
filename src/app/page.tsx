import Header from "@/views/Header/Header";
import Hero from "@/views/Hero/Hero";
import About from "@/views/About/About";
import Offers from "@/views/Offers/Offers";
import Career from "@/views/Career/Career";
import Gallery from "@/views/Gallery/Gallery";
import Contacts from "@/views/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offers />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
