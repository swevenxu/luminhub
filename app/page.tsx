'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';

const SCRIPT_URL = 'loadstring(game:HttpGet("http://luminon.top/loader.lua"))()';

const games = [
  { name: 'Fish It', image: '/game-icons/fishit.webp' },
  { name: 'Forsaken', image: '/game-icons/forsaken.webp' },
  { name: 'Grow a Garden', image: '/game-icons/growagarden.webp' },
  { name: 'Hunty Zombie', image: '/game-icons/huntyzombie.webp' },
  { name: 'SAB', image: '/game-icons/sab.webp' },
];

const stats = [
  { value: '4.5K+', label: 'Active Members', color: 'purple' },
  { value: '100%', label: 'Uptime', color: 'green' },
  { value: '20+', label: 'Supported Games', color: 'blue' },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyScript = () => {
    navigator.clipboard.writeText(SCRIPT_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen relative overflow-x-hidden bg-black"
      >
        <div className="absolute inset-0 opacity-60 grid-bg" />

        <section className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pt-20 md:pt-32 lg:pt-40 relative z-10">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="flex justify-center lg:order-last w-full">
              <Image
                src="/hero-image.png"
                alt="Lumin Hub Preview"
                width={600}
                height={400}
                className="rounded-lg w-full max-w-[250px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-full h-auto"
                style={{ boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.3), 20px 20px 0px rgba(0, 0, 0, 0.2)' }}
              />
            </div>

            <div className="text-white text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 uppercase font-heading">
                The only hub<br />
                <span className="text-[#8f21d1]">you need to be on.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6 px-4 sm:px-0 font-body">
                Premium Roblox scripts for your favorite games. Fast, reliable, and always updated.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button variant="primary" size="md" onClick={handleCopyScript} className="font-accent">
                  {copied ? 'Copied!' : 'Get Script'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-12 md:py-20 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-12 uppercase text-center md:text-left font-heading">
            Featured <span className="text-[#8f21d1]">Games</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-[300px] sm:max-w-none mx-auto">
            {games.map((game) => (
              <div key={game.name} className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer group relative">
                <div className="aspect-square relative">
                  <Image src={game.image} alt={game.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-sm font-medium text-center font-body">{game.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pb-12 md:pb-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="glass glass-hover rounded-2xl p-6 text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-${stat.color}-500/20`}>
                  <svg className={`w-6 h-6 text-${stat.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 font-heading">{stat.value}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-accent">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pb-8 relative z-10">
          <div className="glass rounded-2xl md:rounded-3xl py-6 md:py-8 px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm font-body">© 2026 Lumin-Hub. All Rights Reserved.</p>
              <div className="flex items-center gap-6">
                <a href="/tos" className="text-gray-400 hover:text-white text-sm transition-colors font-body">Terms of Service</a>
                <a href="https://discord.gg/luminhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </motion.main>
    </>
  );
}
