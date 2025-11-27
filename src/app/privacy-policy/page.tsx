import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          
          <p 
            className="text-white/60 mb-12"
            style={{
              fontFamily: 'SF Pro Display, sans-serif',
              fontSize: '16px',
              fontWeight: '400'
            }}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {/* Content Container */}
          <div 
            className="relative rounded-2xl p-8 md:p-12 space-y-8"
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

            <div className="relative z-10 space-y-8 text-white/90" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
              
              {/* Introduction */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  1. Introduction
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  Welcome to Hunnidlabs. We are committed to protecting your personal information and your right to privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website and use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white/90 mb-2 text-lg font-medium">2.1 Personal Information</h3>
                    <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-2 ml-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <li>Register for an account or use our services</li>
                      <li>Contact us through our contact forms or email</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Participate in surveys, contests, or promotions</li>
                    </ul>
                    <p className="leading-relaxed mt-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      This information may include your name, email address, phone number, company name, and any other 
                      information you choose to provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white/90 mb-2 text-lg font-medium">2.2 Automatically Collected Information</h3>
                    <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-2 ml-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages you visit and time spent on pages</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  3. How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your requests and transactions</li>
                  <li>To send you technical notices, updates, and support messages</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To send you marketing and promotional communications (with your consent)</li>
                  <li>To monitor and analyze trends, usage, and activities</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  4. Information Sharing and Disclosure
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information 
                  only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who 
                  perform services on our behalf, such as hosting, analytics, and customer support.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to 
                  valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your 
                  information may be transferred as part of that transaction.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  5. Data Security
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                  the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  6. Your Rights
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to rectify inaccurate or incomplete information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to object to processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
                <p className="leading-relaxed mt-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  To exercise these rights, please contact us using the contact information provided below.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if 
                  you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  8. Third-Party Links
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                  or content of these third-party sites. We encourage you to read the privacy policies of any third-party 
                  sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  9. Children&apos;s Privacy
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If you become aware that a child has provided us with personal information, 
                  please contact us, and we will take steps to delete such information.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  10. Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy 
                  Policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 
                  className="text-white mb-4 text-2xl font-semibold"
                  style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                >
                  11. Contact Us
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  <p><strong>Email:</strong> hello@hunnidlabs.com</p>
                  <p><strong>Phone:</strong> +91 6393623823</p>
                  <p><strong>Address:</strong> Iconic Tower, A 13, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309, India</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

