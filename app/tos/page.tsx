'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
        
        <div 
          className="max-w-3xl mx-auto rounded-2xl p-6 md:p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="space-y-8">
            
            {/* 1. License Usage & Restrictions */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.39854 12.1458C2.33012 11.5289 1.96404 10.1627 2.5809 9.09428L4.09689 6.4685C4.71388 5.39984 6.08042 5.03388 7.14894 5.65079C7.63842 5.9334 8.25011 5.58009 8.25011 5.01524C8.25011 3.78144 9.2503 2.78125 10.4841 2.78125H13.5165C14.7502 2.78125 15.7501 3.78149 15.7501 5.01502C15.7501 5.57981 16.3615 5.93263 16.8503 5.65041C17.9185 5.03366 19.2845 5.39967 19.9012 6.46792L21.4176 9.09435C22.0345 10.1628 21.6684 11.5289 20.6 12.1458C20.1108 12.4282 20.1108 13.1343 20.6 13.4167C21.6684 14.0336 22.0344 15.3998 21.4176 16.4682L19.9012 19.0946C19.2845 20.1629 17.9185 20.5289 16.8503 19.9121C16.3615 19.6299 15.7501 19.9827 15.7501 20.5475C15.7501 21.781 14.7502 22.7812 13.5165 22.7812H10.4841C9.2503 22.7812 8.25011 21.7811 8.25011 20.5473C8.25011 19.9824 7.63844 19.6291 7.14896 19.9117C6.08044 20.5286 4.71391 20.1627 4.09692 19.094L2.58092 16.4682C1.96407 15.3998 2.33013 14.0336 3.39856 13.4168C3.88776 13.1343 3.88777 12.4282 3.39854 12.1458ZM11.9992 8.94618C9.88118 8.94618 8.16419 10.6632 8.16419 12.7812C8.16419 14.8992 9.88118 16.6162 11.9992 16.6162C14.1172 16.6162 15.8342 14.8992 15.8342 12.7812C15.8342 10.6632 14.1172 8.94618 11.9992 8.94618Z" fill="#a855f7"/>
                </svg>
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
            
            {/* 2. Payment Terms */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12ZM13 7.375C13 6.96079 12.6642 6.625 12.25 6.625C11.8358 6.625 11.5 6.96079 11.5 7.375V7.845C10.498 8.07236 9.75 8.96845 9.75 10.0392V10.3043C9.75 11.2422 10.3318 12.0817 11.2099 12.411L12.7634 12.9936C13.0561 13.1034 13.25 13.3832 13.25 13.6959V13.9609C13.25 14.3752 12.9142 14.7109 12.5 14.7109H11.8126C11.5019 14.7109 11.25 14.4591 11.25 14.1483C11.25 13.7341 10.9142 13.3983 10.5 13.3983C10.0858 13.3983 9.75 13.7341 9.75 14.1483C9.75 15.1812 10.5092 16.0368 11.5 16.1874V16.625C11.5 17.0392 11.8358 17.375 12.25 17.375C12.6642 17.375 13 17.0392 13 16.625V16.1552C14.002 15.9278 14.75 15.0317 14.75 13.9609V13.6959C14.75 12.758 14.1682 11.9185 13.2901 11.5891L11.7366 11.0066C11.4439 10.8968 11.25 10.6169 11.25 10.3043V10.0392C11.25 9.62503 11.5858 9.28924 12 9.28924H12.6874C12.9981 9.28924 13.25 9.54113 13.25 9.85184C13.25 10.2661 13.5858 10.6018 14 10.6018C14.4142 10.6018 14.75 10.2661 14.75 9.85184C14.75 8.81897 13.9908 7.96341 13 7.81278V7.375Z" fill="#22c55e"/>
                </svg>
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
            
            {/* 3. Refund Policy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M2 12.8906C2 7.36778 6.47715 2.89062 12 2.89062C17.5228 2.89062 22 7.36778 22 12.8906C22 18.4135 17.5228 22.8906 12 22.8906C6.47715 22.8906 2 18.4135 2 12.8906ZM8.78362 10.7354L10.9388 12.8906L8.78362 15.0458C8.49073 15.3387 8.49073 15.8136 8.78362 16.1065C9.07652 16.3994 9.55139 16.3994 9.84428 16.1065L11.9995 13.9513L14.1546 16.1064C14.4475 16.3993 14.9224 16.3993 15.2153 16.1064C15.5082 15.8135 15.5082 15.3387 15.2153 15.0458L13.0602 12.8906L15.2153 10.7355C15.5082 10.4426 15.5082 9.96771 15.2153 9.67482C14.9224 9.38192 14.4475 9.38192 14.1546 9.67482L11.9995 11.83L9.84428 9.67475C9.55139 9.38186 9.07652 9.38186 8.78362 9.67475C8.49073 9.96764 8.49073 10.4425 8.78362 10.7354Z" fill="#ef4444"/>
                  <path d="M8.78363 9.67475C8.49074 9.96764 8.49074 10.4425 8.78363 10.7354L10.9389 12.8906L8.78363 15.0458C8.49074 15.3387 8.49074 15.8136 8.78363 16.1065C9.07653 16.3994 9.5514 16.3994 9.84429 16.1065L11.9995 13.9513L14.1547 16.1064C14.4476 16.3993 14.9224 16.3993 15.2153 16.1064C15.5082 15.8135 15.5082 15.3387 15.2153 15.0458L13.0602 12.8906L15.2153 10.7355C15.5082 10.4426 15.5082 9.96771 15.2153 9.67482C14.9224 9.38192 14.4476 9.38192 14.1547 9.67482L11.9995 11.83L9.84429 9.67475C9.5514 9.38185 9.07653 9.38185 8.78363 9.67475Z" fill="#ef4444"/>
                </svg>
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
            
            {/* 4. Service Termination */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.9545 5.95548C6.39384 5.51614 7.10616 5.51614 7.5455 5.95548L11.999 10.409L16.4524 5.95561C16.8918 5.51627 17.6041 5.51627 18.0434 5.95561C18.4827 6.39495 18.4827 7.10726 18.0434 7.5466L13.59 12L18.0434 16.4534C18.4827 16.8927 18.4827 17.605 18.0434 18.0444C17.6041 18.4837 16.8918 18.4837 16.4524 18.0444L11.999 13.591L7.5455 18.0445C7.10616 18.4839 6.39384 18.4839 5.9545 18.0445C5.51517 17.6052 5.51516 16.8929 5.9545 16.4535L10.408 12L5.9545 7.54647C5.51516 7.10713 5.51517 6.39482 5.9545 5.95548Z" fill="#f97316"/>
                </svg>
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
            
            {/* 5. Service Disclaimer */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.3028 3.7801C18.4241 2.90142 16.9995 2.90142 16.1208 3.7801L14.3498 5.5511C14.3442 5.55633 14.3387 5.56166 14.3333 5.5671C14.3279 5.57253 14.3225 5.57803 14.3173 5.58359L5.83373 14.0672C5.57259 14.3283 5.37974 14.6497 5.27221 15.003L4.05205 19.0121C3.9714 19.2771 4.04336 19.565 4.23922 19.7608C4.43508 19.9567 4.72294 20.0287 4.98792 19.948L8.99703 18.7279C9.35035 18.6203 9.67176 18.4275 9.93291 18.1663L20.22 7.87928C21.0986 7.0006 21.0986 5.57598 20.22 4.6973L19.3028 3.7801ZM14.8639 7.15833L6.89439 15.1278C6.80735 15.2149 6.74306 15.322 6.70722 15.4398L5.8965 18.1036L8.56029 17.2928C8.67806 17.257 8.7852 17.1927 8.87225 17.1057L16.8417 9.13619L14.8639 7.15833ZM17.9024 8.07553L19.1593 6.81862C19.4522 6.52572 19.4522 6.05085 19.1593 5.75796L18.2421 4.84076C17.9492 4.54787 17.4743 4.54787 17.1814 4.84076L15.9245 6.09767L17.9024 8.07553Z" fill="#eab308"/>
                </svg>
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
            
            {/* 6. Key System Access */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.9861 4.52838L17.0901 6.63241L16.0312 7.69129L14.9878 6.64787C14.6949 6.35497 14.2201 6.35497 13.9272 6.64787C13.6343 6.94076 13.6343 7.41563 13.9272 7.70853L14.9706 8.75195L12.6366 11.0859C10.5314 9.4966 7.52332 9.66111 5.60497 11.5795C3.50668 13.6778 3.50668 17.0798 5.60497 19.1781C7.70326 21.2763 11.1053 21.2763 13.2036 19.1781C15.1218 17.2598 15.2864 14.2519 13.6972 12.1466L19.7413 6.1026C20.0342 5.8097 20.0342 5.33483 19.7413 5.04194C19.4484 4.74904 18.9735 4.74904 18.6806 5.04194L18.1508 5.57175L16.0468 3.46772C15.7539 3.17482 15.279 3.17482 14.9861 3.46772C14.6932 3.76061 14.6932 4.23548 14.9861 4.52838ZM12.1282 12.6255L12.1427 12.6405L12.1577 12.655C13.6554 14.1687 13.6505 16.6098 12.1429 18.1174C10.6304 19.6299 8.17814 19.6299 6.66563 18.1174C5.15312 16.6049 5.15312 14.1526 6.66563 12.6401C8.17323 11.1325 10.6145 11.1276 12.1282 12.6255Z" fill="#3b82f6"/>
                </svg>
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
            
            {/* 7. Reverse Engineering Prohibition */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16V17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5V16Z" fill="#6366f1"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.75 7.25C6.75 4.3505 9.10051 2 12 2C14.8995 2 17.25 4.35051 17.25 7.25V9.125H18.5C19.7426 9.125 20.75 10.1324 20.75 11.375V17.2495C20.75 19.8729 18.6234 21.9995 16 21.9995H8C5.37665 21.9995 3.25 19.8729 3.25 17.2495V11.375C3.25 10.1324 4.25736 9.125 5.5 9.125H6.75V7.25ZM8.25 9.125H15.75V7.25C15.75 5.17893 14.0711 3.5 12 3.5C9.92893 3.5 8.25 5.17893 8.25 7.25V9.125ZM5.5 10.625C5.08579 10.625 4.75 10.9608 4.75 11.375V17.2495C4.75 19.0444 6.20507 20.4995 8 20.4995H16C17.7949 20.4995 19.25 19.0444 19.25 17.2495V11.375C19.25 10.9608 18.9142 10.625 18.5 10.625H5.5Z" fill="#6366f1"/>
                </svg>
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
            
            {/* 8. Data Collection & Privacy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.1385 2.29633C11.6899 2.06789 12.3094 2.06789 12.8608 2.29633L19.409 5.00923C20.1849 5.33068 20.7473 6.07313 20.7701 6.95597C20.8871 11.5013 19.4296 17.7631 13.067 21.5139C12.4101 21.9012 11.5955 21.9047 10.9353 21.5237C4.43153 17.7707 3.09402 11.4935 3.22752 6.95318C3.2534 6.07287 3.81392 5.33089 4.59034 5.00922L11.1385 2.29633ZM12.2867 3.68211C12.1029 3.60596 11.8964 3.60596 11.7126 3.68211L5.16447 6.395C5.05602 6.44194 4.75SEL7.01046 4.72689C4.63498 11.0598 5.81703 16.4363 11.5765 19.7712C11.8376 19.9222 12.1579 19.9206 12.4172 19.7679C18.2536 16.3304 19.3628 11.0514 19.2708 6.95318C19.2605 6.53358 18.9433 6.17686 18.5421 6.01086L12.2867 3.68211Z" fill="#06b6d4"/>
                </svg>
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
            
            {/* 9. Terms Updates */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.8749 2.51272C20.1915 1.8293 19.0835 1.8293 18.4001 2.51272L13.2418 7.67095C12.879 8.03379 12.6511 8.50974 12.5959 9.0199L12.4069 10.7668C12.3824 10.9926 12.4616 11.2173 12.6222 11.3778C12.7827 11.5384 13.0074 11.6176 13.2332 11.5931L14.9801 11.4041C15.4903 11.3489 15.9662 11.121 16.3291 10.7582L21.4873 5.59994C22.1707 4.91652 22.1707 3.80848 21.4873 3.12506L20.8749 2.51272ZM18.5981 4.43601L19.564 5.40191L15.2684 9.69751C15.1474 9.81846 14.9888 9.89494 14.8189 9.91467L14.0186 10.0073L14.0853 9.18107C14.1051 9.01124 14.1815 8.85259 14.3025 8.73164L18.5981 4.43601Z" fill="#ec4899"/>
                  <path d="M5.5 3.25H15.5411L14.0411 4.75H5.5C5.08579 4.75 4.75 5.08579 4.75 5.5V18.5C4.75 18.9142 5.08579 19.25 5.5 19.25H18.5C18.9142 19.25 19.25 18.9142 19.25 18.5V9.95823L20.75 8.45823V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V5.5C3.25 4.25736 4.25736 3.25 5.5 3.25Z" fill="#ec4899"/>
                </svg>
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
            
            {/* 10. Third-Party Agreements */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8253 6.45518C11.8222 6.45304 11.8191 6.45092 11.816 6.44882L11.0226 5.91552C9.90385 5.16349 8.42087 5.25001 7.39716 6.12703L5.44921 7.79585C5.3133 7.91229 5.14023 7.97629 4.96126 7.97629H2.75C2.33579 7.97629 2 8.31207 2 8.72629V14.7558C2 15.17 2.33579 15.5058 2.75 15.5058H4.83766C5.05324 15.5058 5.2584 15.5986 5.40079 15.7604L7.74003 18.4197C8.49372 19.2765 9.76945 19.4335 10.7083 18.7849L11.3925 18.3122L12.1263 18.5611C13.0569 18.8769 14.0847 18.5522 14.665 17.7591L15.135 17.1168L15.4611 17.1608C16.3853 17.2854 17.2905 16.827 17.7371 16.0084L17.7859 15.9188H21.25C21.6642 15.9188 22 15.583 22 15.1688V8.72629C22 8.31207 21.6642 7.97629 21.25 7.97629H19.0388C18.8587 7.97629 18.6846 7.91148 18.5483 7.79371L16.8614 6.3357C15.3979 5.07079 13.2183 5.12952 11.8253 6.45518ZM10.1858 7.16041C9.62641 6.78439 8.88492 6.82765 8.37306 7.26616L6.42512 8.93498C6.01738 9.28429 5.49817 9.47629 4.96126 9.47629H3.5V14.0058H4.83766C5.48441 14.0058 6.09989 14.2841 6.52706 14.7697L8.8663 17.429C9.11753 17.7146 9.54277 17.7669 9.85573 17.5507L10.8502 16.8637C11.0453 16.7289 11.2928 16.6943 11.5174 16.7706L12.6083 17.1407C12.9185 17.2459 13.2611 17.1377 13.4545 16.8733L14.1879 15.8711C14.3502 15.6492 14.6209 15.534 14.8934 15.5707L15.6616 15.6743C15.9696 15.7158 16.2714 15.563 16.4202 15.2901L16.675 14.823C16.6795 14.8144 16.6841 14.8059 16.6889 14.7975L16.7135 14.7524C16.8754 14.4556 16.8186 14.0871 16.5749 13.8527L13.918 11.2977L11.839 12.9305C10.9599 13.621 9.70712 13.5613 8.8976 12.7904L8.82951 12.7255C7.91585 11.8554 7.89611 10.4043 8.78576 9.50962L10.7469 7.53756L10.1858 7.16041ZM18.305 14.4188H20.5V9.47629H19.0388C18.4985 9.47629 17.9762 9.28187 17.5675 8.92857L15.8805 7.47056C14.9865 6.69784 13.6471 6.74839 12.8138 7.58629L9.84938 10.5673C9.55282 10.8655 9.5594 11.3493 9.86396 11.6393L9.93205 11.7041C10.2019 11.9611 10.6195 11.981 10.9125 11.7508L13.4755 9.73786C13.4946 9.72126 13.5144 9.70578 13.5347 9.69143L14.041 9.29373C14.3668 9.03789 14.8383 9.09456 15.0941 9.42031C15.3122 9.69806 15.3032 10.0818 15.0939 10.3474L17.6146 12.7715C18.0737 13.2129 18.3116 13.813 18.305 14.4188Z" fill="#14b8a6"/>
                </svg>
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
