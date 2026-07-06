import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import OKancelarii from "./pages/OKancelarii";
import NaszeWygrane from "./pages/NaszeWygrane";
import Wiedza from "./pages/Wiedza";
import Kariera from "./pages/Kariera";
import Kontakt from "./pages/Kontakt";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sluzebnosc-przesylu" element={<ServicePage slug="sluzebnosc-przesylu" />} />
          <Route path="/szkody-komunikacyjne" element={<ServicePage slug="szkody-komunikacyjne" />} />
          <Route path="/sankcja-kredytu-darmowego" element={<ServicePage slug="sankcja-kredytu-darmowego" />} />
          <Route path="/o-kancelarii" element={<OKancelarii />} />
          <Route path="/nasze-wygrane" element={<NaszeWygrane />} />
          <Route path="/wiedza" element={<Wiedza />} />
          <Route path="/kariera" element={<Kariera />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
