import Header from '../components/Header';
import ContactInfoSection from '../components/ContactInfoSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="relative bg-black overflow-hidden">
      <Header />
      <ContactInfoSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

