'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

// reseller page for purchasing lifetime keys
export default function ResellerPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden overflow-x-hidden" 
      style={{ backgroundColor: '#000000' }}
    >
      
      <header 
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="px-4 md:px-8 lg:px-16 py-3 md:py-4">
          <nav className="flex items-center justify-between">
            
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Lumin Hub"
                width={120}
                height={40}
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white transition-all hover:scale-105"
              style={{ 
                fontFamily: "'Expose', sans-serif",
                background: 'linear-gradient(135deg, rgba(138, 43, 196, 0.4), rgba(168, 85, 247, 0.3))',
                border: '1px solid rgba(168, 85, 247, 0.4)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </nav>
        </div>
      </header>
      
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
        
        <div className="text-center mb-12 md:mb-16">
          
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Lumin Hub"
              width={100}
              height={100}
              className="w-20 h-20 md:w-24 md:h-24"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(138, 43, 196, 0.5))'
              }}
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Plein', sans-serif" }}>
            Official
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Plein', sans-serif", color: '#8f21d1' }}>
            Resellers
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
            Choose your preferred payment method and reseller for Lumin-Hub access.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          
          <div 
            className="relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]"
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
            
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-4" style={{
              background: 'rgba(249, 115, 22, 0.15)',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase" style={{
                fontFamily: "'Expose', sans-serif",
                background: 'rgba(249, 115, 22, 0.2)',
                color: '#fb923c',
                border: '1px solid rgba(249, 115, 22, 0.3)'
              }}>
                Official
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white text-center mb-2" style={{ fontFamily: "'Khand', sans-serif" }}>
              Sonar.gay
            </h3>
            
            <p className="text-gray-400 text-center text-sm mb-6" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Official website with crypto payment
            </p>
            
            <p className="text-gray-500 text-xs uppercase tracking-wider text-center mb-3" style={{ fontFamily: "'Expose', sans-serif" }}>
              Payment Methods
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-4 py-2 rounded-lg text-sm text-gray-300" style={{
                fontFamily: "'Bespoke Sans', sans-serif",
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                Crypto
              </span>
            </div>
            
            <Button 
              variant="primary"
              size="md"
              className="w-full"
              style={{ 
                fontFamily: "'Expose', sans-serif",
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)'
              }}
              onClick={() => window.open('https://sonar.gay', '_blank')}
              rightIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              Visit Sonar.gay
            </Button>
          </div>
          
          <div 
            className="relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]"
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
            
            <div className="flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-4" style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}>
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase" style={{
                fontFamily: "'Expose', sans-serif",
                background: 'rgba(239, 68, 68, 0.2)',
                color: '#f87171',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                Reseller
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white text-center mb-2" style={{ fontFamily: "'Khand', sans-serif" }}>
              BloxProducts
            </h3>
            
            <p className="text-gray-400 text-center text-sm mb-6" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Trusted source in software distribution
            </p>
            
            <p className="text-gray-500 text-xs uppercase tracking-wider text-center mb-3" style={{ fontFamily: "'Expose', sans-serif" }}>
              Payment Methods
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              <span className="px-3 py-2 rounded-lg text-xs text-gray-300 text-center" style={{
                fontFamily: "'Bespoke Sans', sans-serif",
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                Stripe
              </span>
              <span className="px-3 py-2 rounded-lg text-xs text-gray-300 text-center" style={{
                fontFamily: "'Bespoke Sans', sans-serif",
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                Credit Card
              </span>
              <span className="px-3 py-2 rounded-lg text-xs text-gray-300 text-center" style={{
                fontFamily: "'Bespoke Sans', sans-serif",
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                PayPal
              </span>
              <span className="px-3 py-2 rounded-lg text-xs text-gray-300 text-center" style={{
                fontFamily: "'Bespoke Sans', sans-serif",
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                Cash App
              </span>
              <span className="px-3 py-2 rounded-lg text-xs text-gray-300 text-center" style={{
                fontFamily: "'Bespoke Sans', sans-serif",
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                Crypto
              </span>
              <span className="px-3 py-2 rounded-lg text-xs text-gray-300 text-center" style={{
                fontFamily: "'Bespoke Sans', sans-serif",
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                Robux
              </span>
            </div>
            
            <Button 
              variant="primary"
              size="md"
              className="w-full"
              style={{ 
                fontFamily: "'Expose', sans-serif",
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                boxShadow: '0 8px 32px rgba(239, 68, 68, 0.4)'
              }}
              onClick={() => window.open('https://bloxproducts.com/scripts#LuminHub', '_blank')}
              rightIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              Visit BloxProducts
            </Button>
          </div>
        </div>
        
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
              <a href="/tos" className="text-gray-400 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                Terms of Service
              </a>
              <a href="https://discord.gg/luminhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </motion.main>
  );
}
