'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: '400' });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Lumin Hub"
              width={120}
              height={40}
              className="h-10 md:h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8" style={{ fontFamily: "'Expose', sans-serif" }}>
            <Link 
              href="/" 
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors uppercase"
            >
              Home
            </Link>
            <Link 
              href="/getkey" 
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors uppercase"
            >
              Get Key
            </Link>
            <Link 
              href="https://discord.com/invite/luminhub" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors uppercase"
            >
              Discord
            </Link>
          </div>
          
          {/* Desktop Buy Now Button */}
          <Link 
            href="#buynow" 
            className="hidden md:block uppercase text-sm"
            style={{
              fontFamily: "'Expose', sans-serif",
              background: 'linear-gradient(135deg, rgba(127, 124, 255, 0.8), rgba(127, 124, 255, 0.6))',
              backdropFilter: 'blur(20px)',
              color: 'rgb(255, 255, 255)',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '500',
              border: '1px solid rgba(127, 124, 255, 0.3)',
              boxShadow: '0 4px 20px rgba(127, 124, 255, 0.3)',
              transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Buy Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
            style={{ fontFamily: "'Expose', sans-serif" }}
          >
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/getkey" 
                className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Key
              </Link>
              <Link 
                href="https://discord.com/invite/luminhub" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Discord
              </Link>
              <Link 
                href="#buynow" 
                className="mt-2 px-4 py-3 text-sm text-white text-center uppercase rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(127, 124, 255, 0.8), rgba(127, 124, 255, 0.6))',
                  border: '1px solid rgba(127, 124, 255, 0.3)',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
