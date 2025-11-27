'use client';

import React from 'react';

export default function ToolkitSection() {
  const toolkitItems = [
    'AI / ML',
    'Web Apps', 
    'Clouds',
    'Design',
    'Digital Marketing'
  ];

  return (
    <section className="relative py-24 flex flex-col justify-center items-center px-8">
      {/* Deep navy-to-black gradient background with glowing blue edge */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] to-[#000000]">
        {/* Subtle glowing blue edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>
        
        {/* Cosmic particle specks */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        {/* Main Title */}
        <h2 className="text-white text-2xl md:text-2xl font-semibold mb-6 font-['Inter',sans-serif]">
          The Hunnid Labs Toolkit
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto mb-16 font-['Inter',sans-serif]">
          Explore our full spectrum of capabilities, designed to bring any digital vision to life. We combine our mastery of AI, cloud, and software to build precisely what you need to succeed.
        </p>

        {/* Toolkit Cards - Mobile Phone Proportions */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-7xl mx-auto">
          {toolkitItems.map((item, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 opacity-0 translate-y-4 animate-fadeInUp"
              style={{ 
                width: '160px', 
                height: '400px',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Liquid Button Container */}
              <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[31.872px] shrink-0">
                {/* Background Effects - Purple Gradient Layers */}
                <div className="absolute inset-0 pointer-events-none rounded-[31.872px]">
                  {/* Gradient layer 1: screen blend mode */}
                  <div className="absolute bg-gradient-to-b from-[rgba(68,43,255,0.06)] inset-0 mix-blend-screen rounded-[31.872px] to-[rgba(41,26,153,0.12)]" />
                  
                  {/* Dark overlay: color-burn blend mode */}
                  <div className="absolute bg-[rgba(29,29,29,0.2)] inset-0 mix-blend-color-burn rounded-[31.872px]" />
                  
                  {/* Bottom gradient */}
                  <div className="absolute bg-gradient-to-b from-transparent inset-0 rounded-[31.872px] to-[rgba(7,7,161,0.4)]" />
                  
                  {/* Top gradient */}
                  <div className="absolute bg-gradient-to-b from-[rgba(109,109,255,0.2)] inset-0 rounded-[31.872px] to-transparent" />
                </div>

                {/* Main Card Content */}
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex gap-[7.968px] items-center justify-center px-[23.904px] py-[11.952px] relative size-full">
                    {/* Vertical Text Content */}
                    <div className="flex items-center justify-center h-full">
                      <div 
                        className="text-center"
                        style={{
                          width: '200px',
                          height: '50px',
                          fontFamily: "'SF Pro:Medium', sans-serif",
                          fontSize: '42px',
                          fontWeight: '510',
                          lineHeight: 'normal',
                          textAlign: 'center',
                          textShadow: 'rgba(0,0,0,0.5) 0px 4.799px 4.799px',
                          color: 'white',
                          transform: 'rotate(270deg)',
                          whiteSpace: 'nowrap',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {item}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complex Inset Shadows */}
                <div className="absolute inset-0 pointer-events-none rounded-[31.872px]" 
                  style={{
                    boxShadow: `
                      8px 8px 4px -10px inset #ffffff,
                      -6px -6px 3px -7px inset #b3b3b3,
                      1px 1px 0.5px -1px inset #b3b3b3,
                      0px 0px 10px 0px inset rgba(80,83,253,0.25)
                    `
                  }}
                />

                {/* Star Decorations */}
                <div className="absolute inset-[5.17%_6.68%_46.55%_5.83%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 210 290"
                  >
                    <g id="stars">
                      {/* Various star shapes with #6042FF color and different opacities */}
                      <ellipse
                        cx="116.768"
                        cy="59.3805"
                        fill="#6042FF"
                        fillOpacity="0.35"
                        rx="0.852385"
                        ry="1.38258"
                        transform="rotate(-180 116.768 59.3805)"
                      />
                      <ellipse
                        cx="144.042"
                        cy="48.3265"
                        fill="#6042FF"
                        fillOpacity="0.81"
                        rx="0.852385"
                        ry="1.38258"
                        transform="rotate(-180 144.042 48.3265)"
                      />
                      <ellipse
                        cx="23.6143"
                        cy="56.0456"
                        fill="#6042FF"
                        fillOpacity="0.52"
                        rx="0.852385"
                        ry="1.38258"
                        transform="rotate(-180 23.6143 56.0456)"
                      />
                      <ellipse
                        cx="9.80441"
                        cy="191.584"
                        fill="#6042FF"
                        fillOpacity="0.52"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 9.80441 191.584)"
                      />
                      <ellipse
                        cx="66.2712"
                        cy="216.795"
                        fill="#6042FF"
                        fillOpacity="0.52"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 66.2712 216.795)"
                      />
                      <ellipse
                        cx="87.6471"
                        cy="52.7001"
                        fill="#6042FF"
                        fillOpacity="0.35"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 87.6471 52.7001)"
                      />
                      <ellipse
                        cx="30.8258"
                        cy="238.874"
                        fill="#6042FF"
                        fillOpacity="0.41"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 30.8258 238.874)"
                      />
                      <ellipse
                        cx="59.5731"
                        cy="199.372"
                        fill="#6042FF"
                        fillOpacity="0.35"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 59.5731 199.372)"
                      />
                      <ellipse
                        cx="30.6698"
                        cy="102.872"
                        fill="#6042FF"
                        fillOpacity="0.41"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 30.6698 102.872)"
                      />
                      <ellipse
                        cx="6.36803"
                        cy="75.406"
                        fill="#6042FF"
                        fillOpacity="0.52"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 6.36803 75.406)"
                      />
                      <ellipse
                        cx="56.9631"
                        cy="13.9934"
                        fill="#6042FF"
                        rx="1.2784"
                        ry="2.07358"
                        transform="rotate(-180 56.9631 13.9934)"
                      />
                    </g>
                  </svg>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 pointer-events-none rounded-[31.872px] bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Distort Effect - Glass/Blur Effect */}
              <div className="absolute box-border content-stretch flex gap-[7.968px] inset-0 items-start overflow-clip rounded-[30.876px]" 
                style={{
                  boxShadow: '7.968px 3.984px 3.984px 0px rgba(0,0,0,0.25)'
                }}
              >
                <div 
                  className="absolute inset-[-15.94px]"
                  style={{
                    background: 'rgba(255,255,255,0.05)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
