'use client';

import Image from 'next/image';
import { Oswald, Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

const oswald = Oswald({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
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

      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pt-20 md:pt-32 lg:pt-40 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Image - Shows first on mobile */}
          <div className="flex justify-center lg:order-last w-full">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              width={600}
              height={400}
              className="rounded-lg w-full max-w-[250px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-full h-auto"
              style={{
                boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.3), 20px 20px 0px rgba(0, 0, 0, 0.2), 30px 30px 0px rgba(0, 0, 0, 0.1)',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)'
              }}
            />
          </div>

          {/* Text Content */}
          <div className="text-white text-center lg:text-left">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 uppercase"
              style={{
                fontFamily: "'Khand', sans-serif",
                textShadow: '1px 1px 2px rgba(41, 2, 66, 0.8), 2px 2px 4px rgba(41, 2, 66, 0.6), 3px 3px 6px rgba(41, 2, 66, 0.4), 4px 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(41, 2, 66, 0.5)',
                filter: 'drop-shadow(0 4px 8px rgba(41, 2, 66, 0.3))'
              }}
            >
              The only hub<br /><span style={{ color: '#8f21d1' }}>you need to be on.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6 px-4 sm:px-0" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              Premium Roblox scripts for your favorite games. Fast, reliable, and always updated.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="primary"
                size="md"
                className="font-medium"
                style={{ fontFamily: "'Expose', sans-serif" }}
              >
                Get Script
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Games Section */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-12 md:py-20 relative z-10">
        <h2 
          className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-12 uppercase text-center md:text-left"
          style={{
            fontFamily: "'Khand', sans-serif",
            textShadow: '1px 1px 2px rgba(41, 2, 66, 0.8), 2px 2px 4px rgba(41, 2, 66, 0.6), 3px 3px 6px rgba(41, 2, 66, 0.4), 4px 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(41, 2, 66, 0.5)',
            filter: 'drop-shadow(0 4px 8px rgba(41, 2, 66, 0.3))'
          }}
        >
          Featured <span style={{ color: '#8f21d1' }}>Games</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Game Card 1 - Fish It */}
          <div 
            className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="aspect-square relative">
              <Image
                src="/game-icons/fishit.webp"
                alt="Fish It"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: "'Khand', sans-serif" }}>FISH IT</h3>
              </div>
            </div>
          </div>

          {/* Game Card 2 - Forsaken */}
          <div 
            className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="aspect-square relative">
              <Image
                src="/game-icons/forsaken.webp"
                alt="Forsaken"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: "'Khand', sans-serif" }}>FORSAKEN</h3>
              </div>
            </div>
          </div>

          {/* Game Card 3 - Grow a Garden */}
          <div 
            className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="aspect-square relative">
              <Image
                src="/game-icons/growagarden.webp"
                alt="Grow a Garden"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white uppercase text-center" style={{ fontFamily: "'Khand', sans-serif" }}>GROW A GARDEN</h3>
              </div>
            </div>
          </div>

          {/* Game Card 4 - Hunty Zombie */}
          <div 
            className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="aspect-square relative">
              <Image
                src="/game-icons/huntyzombie.webp"
                alt="Hunty Zombie"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white uppercase text-center" style={{ fontFamily: "'Khand', sans-serif" }}>HUNTY ZOMBIE</h3>
              </div>
            </div>
          </div>

          {/* Game Card 5 - SAB */}
          <div 
            className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="aspect-square relative">
              <Image
                src="/game-icons/sab.webp"
                alt="SAB"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: "'Khand', sans-serif" }}>Steal A Brainrot</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pb-12 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {/* Stat Card 1 */}
          <div 
            className="rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Khand', sans-serif" }}>4.5K+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>Active Members</p>
          </div>

          {/* Stat Card 2 */}
          <div 
            className="rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Khand', sans-serif" }}>100%</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>Uptime</p>
          </div>

          {/* Stat Card 3 */}
          <div 
            className="rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Khand', sans-serif" }}>20+</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>Supported Games</p>
          </div>
        </div>

        {/* Footer */}
        <div 
          className="mt-8 md:mt-16 rounded-2xl md:rounded-3xl py-6 md:py-8 px-4 md:px-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              © 2026 Lumin-Hub. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                Terms of Service
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
                Privacy Policy
              </a>
              <a href="https://discord.gg/luminhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </motion.main>
  );
}
