
import CardsPage from "./components/CardsPage";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative">
    <Navbar />
   <HeroPage />
   <CardsSection />
   <CardsPage />
   <Footer />
    </div>
  );
}
