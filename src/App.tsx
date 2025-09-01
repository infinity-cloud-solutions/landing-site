import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadSection from './components/LeadSection';
import ProofSection from './components/ProofSection';
import BenefitsSection from './components/BenefitsSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import HowItWorksSection from './components/HowItWorksSection';
import OfferSection from './components/OfferSection';
import AboutSection from './components/AboutSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import FinalRecapSection from './components/FinalRecapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LeadSection />
        <ProofSection />
        <BenefitsSection />
        <DifferentiatorsSection />
        <HowItWorksSection />
        <OfferSection />
        <AboutSection />
        <SocialProofSection />
        <FAQSection />
        <FinalRecapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;