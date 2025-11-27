import Header from '../components/Header';
import AboutUsSection from '../components/AboutUsSection';
import MissionSection from '../components/MissionSection';
import RebrandSection from '../components/RebrandSection';
import CoreValuesSection from '../components/CoreValuesSection';
import JoinTeamSection from '../components/JoinTeamSection';
import InnovationSection from '../components/InnovationSection';
import DifferentSection from '../components/DifferentSection';
import CareerSection from '../components/CareerSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function CompanyPage() {
  return (
    <main className="relative bg-black overflow-hidden">
      <Header />
      <AboutUsSection />
      <MissionSection />
      <RebrandSection />
      <CoreValuesSection />
      <JoinTeamSection />
      <InnovationSection />
      <FAQSection />
      <DifferentSection />
      <CareerSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

