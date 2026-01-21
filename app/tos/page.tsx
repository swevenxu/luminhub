'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TosPage() {
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
          
          <nav className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
            
            <div className="flex items-center gap-2">
              <span className="text-white font-medium" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>Lumin-Hub</span>
              <span className="text-gray-400" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>|</span>
              <span className="text-gray-400" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>Terms of Service</span>
            </div>
            
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
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pt-28 md:pt-36 pb-12 md:pb-20 relative z-10">
        
        <div className="text-center mb-10 md:mb-14">
          
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Lumin Hub"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(138, 43, 196, 0.5))'
              }}
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Plein', sans-serif", color: '#8f21d1' }}>
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
            By accessing or utilizing any Lumin-Hub services, you acknowledge and agree to be bound by these terms and conditions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                1. License Usage & Restrictions
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                License sharing is strictly prohibited - access is limited to the original purchaser only
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Licenses may not be transferred, resold, gifted, or redistributed under any circumstances
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Any attempt to share, distribute, or allow unauthorized access will result in immediate termination
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Licenses may be deactivated at any time if misuse, abuse, or suspicious activity is detected
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                2. Payment Terms
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Overpayments and underpayments will not be refunded, credited, or otherwise acknowledged
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                It is your responsibility to ensure the exact amount is sent
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                We are not liable for any losses due to transaction errors, incorrect wallet addresses, or blockchain delays
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                3. Refund Policy
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                All transactions are final - no refunds will be issued under any circumstances
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                This policy applies to all scenarios including: change of mind, incompatibility, inactivity, or dissatisfaction with performance
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                4. Service Termination
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                We maintain the right to suspend or terminate any license at our discretion, with or without prior notice
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Termination may result from violations of these terms, service abuse, or breaches of third-party agreements
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                5. Service Disclaimer
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                All services are provided on an &quot;as is&quot; basis, without warranties of any kind
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                We do not guarantee continuous uptime, availability, or ongoing technical support
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                6. Key System Access
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Alternative access methods may be available through our official key distribution system
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Circumventing the key system is strictly prohibited
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Complete task fulfillment is required for access - partial completion or manipulation will not grant permissions
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                7. Reverse Engineering Prohibition
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Reverse engineering, decompilation, or modification of our software or systems is strictly forbidden
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Violations will result in immediate termination and permanent blacklisting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Users who have been blacklisted may be reinstated for a fee of $2.50 - contact our Discord for this service
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                8. Data Collection & Privacy
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                You consent to the collection and processing of gameplay data (including pets, fruits, and job IDs) for community features and analytics
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                9. Terms Updates
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                We retain the right to modify these terms at any time without prior notification
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                Continued use of our services constitutes acceptance of any updated terms
              </li>
            </ul>
          </div>
          
          <div 
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Khand', sans-serif" }}>
                10. Third-Party Agreements
              </h2>
            </div>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                You must also comply with Luarmor&apos;s Terms of Service to utilize our products
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          className="max-w-3xl mx-auto mt-10 rounded-2xl p-6 md:p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(138, 43, 196, 0.15), rgba(168, 85, 247, 0.1))',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
          }}
        >
          <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Khand', sans-serif" }}>
            Important Notice
          </h3>
          <p className="text-gray-300 text-sm md:text-base" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
            By purchasing or using any Lumin-Hub key, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not purchase or use our products.
          </p>
        </div>
        
        <footer className="mt-16 md:mt-20 text-center">
          <p className="text-gray-400 text-sm" style={{ fontFamily: "'Bespoke Sans', sans-serif" }}>
            © 2026 Lumin-Hub. All Rights Reserved.
          </p>
        </footer>
      </div>
    </motion.main>
  );
}
