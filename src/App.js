import "./App.css";
import TopNavBar from "./components/TopNavBar";
import HeaderSection from "./components/HeaderSection";
import MetricsSection from "./components/MetricsSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingPlansSection from "./components/PricingPlansSection";
import GlobalNetworkSection from "./components/GlobalNetworkSection";
import LogoCloud from "./components/LogoCloud";

function App() {
  return (
    <main>
      <TopNavBar />
      <HeaderSection />
      <MetricsSection />
      <FeaturesSection />
      <PricingPlansSection />
      <GlobalNetworkSection />
      <LogoCloud />
    </main>
  );
}

export default App;
