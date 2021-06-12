import "./App.css";
import TopNavBar from "./components/TopNavBar";
import HeaderSection from "./components/HeaderSection";
import MetricsSection from "./components/MetricsSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingPlansSection from "./components/PricingPlansSection";
import GlobalNetworkSection from "./components/GlobalNetworkSection";
import LogoCloud from "./components/LogoCloud";
import FooterSection from "./components/FooterSection";
import MobileNav from "./components/MobileNav";
import { useState } from "react";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <main>
      {isMobileNavOpen && (
        <MobileNav
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
      )}
      <TopNavBar setIsMobileNavOpen={setIsMobileNavOpen} />
      <HeaderSection />
      <MetricsSection />
      <FeaturesSection />
      <div className="pricingPlansToTestimonialsSection">
        <PricingPlansSection />
        <GlobalNetworkSection />
        <LogoCloud />
        <TestimonialSection />
      </div>
      <FooterSection />
    </main>
  );
}

export default App;
