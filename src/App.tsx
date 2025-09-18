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
import ContactForm from './components/ContactForm';

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={openContactForm} />
      <main>
        <Hero onContactClick={openContactForm} />
        <LeadSection onContactClick={openContactForm} />
        <ProofSection />
        <BenefitsSection onContactClick={openContactForm} />
        <DifferentiatorsSection />
        <HowItWorksSection />
        <OfferSection onContactClick={openContactForm} />
        <AboutSection />
        <SocialProofSection />
        <FAQSection onContactClick={openContactForm} />
        <FinalRecapSection onContactClick={openContactForm} />
      </main>
      <Footer />
      <ContactForm isOpen={isContactFormOpen} setIsOpen={setIsContactFormOpen} />
    </div>
  );
}

export default App;