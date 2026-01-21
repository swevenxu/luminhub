'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function GetKeyPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden overflow-x-hidden" 
      style={{ backgroundColor: '#000000' }}
    >
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pt-24 md:pt-40 pb-12 md:pb-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Plein', sans-serif" }}>
            Get Your <span style={{ color: '#8f21d1' }}>Lumin Key</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg px-4" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
            Pick how you wanna get your Lumin script key.
          </p>
        </div>

        {/* Key Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-32 max-w-3xl mx-auto">
          {/* Lifetime Option */}
          <div 
            className="relative rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs text-white" style={{ 
              fontFamily: "'Expose', sans-serif",
              background: 'rgba(138, 43, 196, 0.3)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              RECOMMENDED
            </div>
            
            <div className="flex items-center justify-center w-14 h-14 rounded-xl mx-auto mb-4" style={{
              background: 'rgba(138, 43, 196, 0.2)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white text-center mb-4" style={{ fontFamily: "'Khand', sans-serif" }}>
              Lumin Lifetime
            </h3>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-200 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{
                  background: 'rgba(138, 43, 196, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-3 h-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Instant key delivery
              </li>
              <li className="flex items-center gap-2 text-gray-200 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{
                  background: 'rgba(138, 43, 196, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-3 h-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 715.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                No Ads
              </li>
            </ul>

            <Button 
              variant="glass"
              size="md"
              className="w-full"
              style={{ fontFamily: "'Expose', sans-serif" }}
            >
              Get Lumin Lifetime
            </Button>
          </div>

          {/* Fly.inc Option */}
          <div 
            className="relative rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs text-white" style={{ 
              fontFamily: "'Expose', sans-serif",
              background: 'rgba(59, 130, 246, 0.3)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              RINKU
            </div>
            
            <div className="flex items-center justify-center mx-auto mb-4">
              <Image
                src="/flyinc-logo.png"
                alt="fly.inc"
                width={100}
                height={50}
                className="h-12 w-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))'
                }}
              />
            </div>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-200 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-3 h-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Premium Experience
              </li>
              <li className="flex items-center gap-2 text-gray-200 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-3 h-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Excellent Performance
              </li>
              <li className="flex items-center gap-2 text-gray-200 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-3 h-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Fast & Reliable
              </li>
            </ul>

            <Button 
              variant="glass-blue"
              size="md"
              className="w-full"
              style={{ fontFamily: "'Expose', sans-serif" }}
            >
              Get Free Key
            </Button>
          </div>
        </div>

        {/* Rinku Tutorials Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plein', sans-serif" }}>
            Rinku <span style={{ color: '#8f21d1' }}>Tutorials</span>
          </h2>
          <p className="text-gray-400 text-lg" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
            Need help with Rinku? Check out our step-by-step guides
          </p>
        </div>

        {/* Tutorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-16 md:mb-32">
          {/* Mobile Tutorial */}
          <div 
            className="relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-6" style={{
              background: 'transparent',
              border: '2px solid rgba(59, 130, 246, 0.6)'
            }}>
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Khand', sans-serif" }}>
              Mobile Tutorial
            </h3>

            <p className="text-gray-400 mb-6" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Complete step-by-step walkthrough for getting your Rinku key on mobile devices
            </p>

            <Button 
              variant="ghost"
              size="md"
              className="!text-blue-400 hover:!text-blue-300 hover:!bg-blue-500/10"
              style={{ fontFamily: "'Expose', sans-serif" }}
              rightIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            >
              Watch Video
            </Button>
          </div>

          {/* PC Tutorial */}
          <div 
            className="relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-6" style={{
              background: 'transparent',
              border: '2px solid rgba(168, 85, 247, 0.6)'
            }}>
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Khand', sans-serif" }}>
              PC Tutorial
            </h3>

            <p className="text-gray-400 mb-6" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Desktop guide showing you exactly how to navigate Rinku and get your key quickly
            </p>

            <Button 
              variant="ghost"
              size="md"
              style={{ fontFamily: "'Expose', sans-serif" }}
              rightIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            >
              Watch Video
            </Button>
          </div>
        </div>

        {/* Why Choose Lumin Lifetime Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Plein', sans-serif" }}>
            Why Choose <span style={{ color: '#8f21d1' }}>Lumin</span> Lifetime?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Lightning Fast */}
          <div 
            className="relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-6" style={{
              background: 'transparent',
              border: '2px solid rgba(138, 43, 196, 0.6)'
            }}>
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Khand', sans-serif" }}>
              Lightning Fast
            </h3>

            <p className="text-gray-400" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Get your key instantly after purchase. No waiting, no delays.
            </p>
          </div>

          {/* VIP Support */}
          <div 
            className="relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-6" style={{
              background: 'transparent',
              border: '2px solid rgba(138, 43, 196, 0.6)'
            }}>
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Khand', sans-serif" }}>
              VIP Support
            </h3>

            <p className="text-gray-400" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Exclusive access to priority support with fast response times.
            </p>
          </div>

          {/* Ad-Free Experience */}
          <div 
            className="relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `
            }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-6" style={{
              background: 'transparent',
              border: '2px solid rgba(138, 43, 196, 0.6)'
            }}>
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Khand', sans-serif" }}>
              Ad-Free Experience
            </h3>

            <p className="text-gray-400" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Zero ads, zero interruptions. Pure premium access.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer 
          className="mt-16 md:mt-32 py-6 md:py-8 rounded-2xl md:rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8">
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              © 2026 Lumin-Hub. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                Privacy Policy
              </a>
              <a href="#discord" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </motion.main>
  );
}
