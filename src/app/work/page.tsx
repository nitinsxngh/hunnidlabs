import Header from '../components/Header';
import SuccessStorySection from '../components/SuccessStorySection';
import ProjectDetailLeft from '../components/ProjectDetailLeft';
import ProjectDetailRight from '../components/ProjectDetailRight';
import WorkCTASection from '../components/WorkCTASection';
import ProjectsGridSection from '../components/ProjectsGridSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function WorkPage() {
  return (
    <main className="relative bg-black overflow-hidden">
      <Header />
      <SuccessStorySection />
      
      {/* Project 1: ILC  - Content Left, Image Right */}
      <ProjectDetailLeft
        projectName="ILC Blockchain Resume"
        projectNameHighlight="Resume"
        description="A decentralized resume builder that lets users create, verify, and own their professional credentials on the blockchain. Powered by the ILC Network, it ensures immutable records, instant employer verification, and privacy-preserving data control using smart contracts, IPFS, and advanced cryptography. Secure, verifiable, and truly user-owned professional identities."
        categories={['Resume', 'Blockchain', 'Digital']}
        ctaText="Get a Full Rundown"
      />

      {/* Project 2: TechFlow - Image Left, Content Right */}
      <ProjectDetailRight
        projectName="TechFlow"
        projectNameHighlight="Flow"
        description="TechFlow revolutionizes workflow automation with AI-powered solutions that streamline business processes, enhance productivity, and drive digital transformation across enterprises."
        categories={['SaaS Platform', 'Workflow Automation', 'AI Integration']}
        ctaText="View Case Study"
      />

      {/* Project 3: CloudSync - Content Left, Image Right */}
      <ProjectDetailLeft
        projectName="CloudSync"
        projectNameHighlight="Sync"
        description="CloudSync provides seamless cloud infrastructure management and data synchronization services, enabling businesses to scale effortlessly while maintaining optimal performance and security."
        categories={['Cloud Solutions', 'Infrastructure', 'DevOps']}
        ctaText="Explore Project"
      />

      {/* Project 4: DataViz Pro - Image Left, Content Right */}
      <ProjectDetailRight
        projectName="DataViz Pro"
        projectNameHighlight="Pro"
        description="DataViz Pro transforms complex data into actionable insights through advanced analytics and visualization tools, empowering decision-makers with real-time business intelligence."
        categories={['Analytics', 'Data Visualization', 'Business Intelligence']}
        ctaText="Learn More"
      />

      <WorkCTASection />

      <ProjectsGridSection />

      <ContactForm />

      <Footer />
    </main>
  );
}

