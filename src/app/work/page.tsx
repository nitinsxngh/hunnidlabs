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
      
      {/* Project 1: Safe Gold - Content Left, Image Right */}
      <ProjectDetailLeft
        projectName="Safe Gold"
        projectNameHighlight="Gold"
        description="Safe gold is the indias largest digital platform for buying, selling and managing digital gold offering, transplant and convient solutions for modern gold investment"
        categories={['Fintech platform', 'Digital Gold', 'Digital Gold']}
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

