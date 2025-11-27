import Header from '../components/Header';
import ExpertiseHeroSection from '../components/ExpertiseHeroSection';
import AIMLSection from '../components/AIMLSection';
import WebAppSection from '../components/WebAppSection';
import CloudSection from '../components/CloudSection';
import ExpertiseCTA from '../components/ExpertiseCTA';
import DesignSection from '../components/DesignSection';
import LowCodeSection from '../components/LowCodeSection';
import DigitalMarketingSection from '../components/DigitalMarketingSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ExpertisePage() {
  return (
    <main className="relative bg-black overflow-hidden">
      <Header />
      <ExpertiseHeroSection />
      <AIMLSection />
      <WebAppSection />
      <CloudSection />
      <ExpertiseCTA />
      <DesignSection />
      <LowCodeSection />
      <DigitalMarketingSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

