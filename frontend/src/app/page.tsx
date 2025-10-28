"use client";

import Navigation from "@/components/landingComp/Navigation";
import Footer from "@/components/landingComp/Footer";
import HeroSection from "@/components/landingComp/HeroSection";
import FeaturesSection from "@/components/landingComp/FeaturesSection";
import LiveMarketsSection from "@/components/landingComp/LiveMarketSection";
import HowItWorksSection from "@/components/landingComp/HowItWorksSection";
import StatsSection from "@/components/landingComp/StatsSection";
import CTASection from "@/components/landingComp/CTASection";

export default function FlashCastLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <LiveMarketsSection />
      <HowItWorksSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
