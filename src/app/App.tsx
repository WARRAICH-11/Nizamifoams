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
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "#EBEBEB",
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
