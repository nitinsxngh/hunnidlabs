import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CommitmentSection from './components/CommitmentSection';
import ProcessSection from './components/ProcessSection';
import ToolkitSection from './components/ToolkitSection';
import LabProjects from './components/LabProjects';
import TechnicalDNA from './components/TechnicalDNA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      <Header />
      <HeroSection />
      <CommitmentSection />
      <ProcessSection />
      <ToolkitSection />
      <LabProjects />
      <TechnicalDNA />
      <ContactForm />
      <Footer />
    </main>
  );
}
