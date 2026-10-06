import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Instagram } from "./components/Instagram";
import { Locations } from "./components/Locations";
import { WhyUs } from "./components/WhyUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./nizami.css";

export default function App() {
  return (
    <div
      className="nizami-shell"
      style={{
        background: "#f2f2f2",
        minHeight: "100vh",
        color: "#111111",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Instagram />
      <Locations />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
