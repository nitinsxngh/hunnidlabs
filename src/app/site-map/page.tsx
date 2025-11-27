import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SitemapPage() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <main className="relative bg-black overflow-hidden min-h-screen">
      <Header />
      
      {/* Content Section */}
      <section className="relative pt-32 pb-24 px-8">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2b] via-[#050814] to-[#000000]">
          {/* Subtle cosmic texture */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Title */}
          <h1 
            className="text-white mb-4"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Sitemap
          </h1>
          
          <p 
            className="text-white/60 mb-12"
            style={{
              fontFamily: 'SF Pro Display, sans-serif',
              fontSize: '16px',
              fontWeight: '400'
            }}
          >
            Find all pages and sections of our website
          </p>

          {/* Content Container */}
          <div 
            className="relative rounded-2xl p-8 md:p-12 space-y-6"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.3) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Glass reflections */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            <div className="relative z-10">
              <h2 
                className="text-white mb-6 text-2xl font-semibold"
                style={{ fontFamily: 'SF Pro Display, sans-serif' }}
              >
                Pages
              </h2>
              <ul className="space-y-3">
                {pages.map((page, index) => (
                  <li key={index}>
                    <a
                      href={page.path}
                      className="text-white/80 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontSize: '18px',
                        lineHeight: '1.6'
                      }}
                    >
                      <span className="mr-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      <span>{page.name}</span>
                      <span className="ml-3 text-white/40 text-sm">{page.path}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

