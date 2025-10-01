import Header from './components/Header';
import SlidingBanner from './components/SlidingBanner';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Gallery from './components/Gallery';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <SlidingBanner />
      <main>
        <Hero />
        <ProductShowcase />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
    </div>
  );
}