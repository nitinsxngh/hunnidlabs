import Header from '../components/Header';
import BlogHeroSection from '../components/BlogHeroSection';
import BlogPostsSection from '../components/BlogPostsSection';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <main className="relative bg-black overflow-hidden">
      <Header />
      <BlogHeroSection />
      <BlogPostsSection />
      <Footer />
    </main>
  );
}

