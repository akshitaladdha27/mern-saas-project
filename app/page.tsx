import Hero from "./components/landing/Hero";
import Navbar from "./components/landing/Navbar";
import Companies from "./components/landing/companies";
import Feature from "./components/landing/feature";
import Footer from "./components/landing/footer";
import GetInTouch from "./components/landing/get-in-touch";
import Guide from "./components/landing/guide";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Feature />
      <Guide />
      <Companies />
      <GetInTouch />
      <Footer />
    </main>
  );
}