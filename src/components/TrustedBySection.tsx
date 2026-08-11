/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface TrustedBySectionProps {
  darkMode: boolean;
  onOpenInquiry?: (type?: string) => void;
}

const uploadedFiles = [
  "eee.webp",
  "eter.webp",
  "rterf.webp",
  "werfe.webp"
];

// Generate exactly 21 logo slots mapped to the available real files
const clientLogos = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  const filename = uploadedFiles[i % uploadedFiles.length];
  return {
    id,
    src: `/logos/${filename}`,
    alt: `Sitora Web Client ${id}`
  };
});

const column1Logos = clientLogos.slice(0, 7);
const column2Logos = clientLogos.slice(7, 14);
const column3Logos = clientLogos.slice(14, 21);

const LogoCard = ({ logo, darkMode }: { logo: { id: number, src: string, alt: string }, darkMode: boolean }) => {
  const [error, setError] = useState(false);

  return (
    <div 
      className="w-full flex-shrink-0"
      style={{ height: 'var(--item-height)', paddingBottom: 'var(--gap)' }}
    >
      <div className={`group relative w-full h-full flex items-center justify-center p-2 sm:p-3 rounded-2xl border transition-all duration-300 z-10 ${darkMode ? 'bg-[#0A0A0A] border-[#D6B16B]/20 shadow-[0_0_15px_rgba(214,177,107,0.04)] hover:border-[#D6B16B]/50 hover:shadow-[0_0_25px_rgba(214,177,107,0.15)]' : 'bg-white border-[#D6B16B]/30 shadow-sm hover:border-[#D6B16B]/60 hover:shadow-[0_0_15px_rgba(214,177,107,0.1)]'}`}>
        {!error ? (
          <img 
            src={logo.src} 
            alt={logo.alt} 
            onError={() => setError(true)}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02] relative z-20"
            style={{ filter: 'none', opacity: 1 }}
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center opacity-20 relative z-20 ${darkMode ? 'text-[#D6B16B]' : 'text-neutral-400'}`}>
            <span className="text-[10px] font-mono font-bold tracking-widest">{logo.id.toString().padStart(2, '0')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const TrustedBySection: React.FC<TrustedBySectionProps> = ({ darkMode, onOpenInquiry }) => {
  const { t } = useLanguage();

  return (
    <section id="trusted-by" className={`relative w-full py-24 sm:py-32 overflow-hidden ${darkMode ? 'bg-[#05070A]' : 'bg-[#FAFBFC]'}`}>
      <style>{`
        #trusted-by {
          --card-height: 80px;
          --gap: 16px;
          --item-height: calc(var(--card-height) + var(--gap));
          --viewport-height: calc(3 * var(--card-height) + 2 * var(--gap));
        }
        @media (min-width: 640px) {
          #trusted-by {
            --card-height: 120px;
            --gap: 20px;
          }
        }
        
        /* 
          14 items total (7 original + 7 duplicated).
          We translate exactly 50% to create a seamless continuous loop.
        */
        @keyframes reel-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes reel-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        .animate-reel-up-1 {
          animation: reel-up 22s linear infinite;
        }
        .animate-reel-down-2 {
          animation: reel-down 26s linear infinite;
        }
        .animate-reel-up-3 {
          animation: reel-up 24s linear infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-reel-up-1, .animate-reel-down-2, .animate-reel-up-3 {
            animation-play-state: paused;
          }
        }
      `}</style>
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          
          {/* LEFT SIDE: 3 INDEPENDENT COLUMNS */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full">
            
            {/* Column 1 Viewport */}
            <div className="w-full overflow-hidden relative rounded-xl" style={{ height: 'var(--viewport-height)' }}>
              <div className="flex flex-col w-full animate-reel-up-1">
                {[...column1Logos, ...column1Logos].map((logo, i) => (
                  <LogoCard key={`col1-${i}`} logo={logo} darkMode={darkMode} />
                ))}
              </div>
            </div>
            
            {/* Column 2 Viewport */}
            <div className="w-full overflow-hidden relative rounded-xl" style={{ height: 'var(--viewport-height)' }}>
              <div className="flex flex-col w-full animate-reel-down-2">
                {[...column2Logos, ...column2Logos].map((logo, i) => (
                  <LogoCard key={`col2-${i}`} logo={logo} darkMode={darkMode} />
                ))}
              </div>
            </div>
            
            {/* Column 3 Viewport */}
            <div className="w-full overflow-hidden relative rounded-xl" style={{ height: 'var(--viewport-height)' }}>
              <div className="flex flex-col w-full animate-reel-up-3">
                {[...column3Logos, ...column3Logos].map((logo, i) => (
                  <LogoCard key={`col3-${i}`} logo={logo} darkMode={darkMode} />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col space-y-8 lg:pl-10">
            <div className="space-y-5">
              <span className="text-[10px] sm:text-xs font-mono text-[#D6B16B] uppercase tracking-[0.2em] font-bold block">
                {t('WHO TRUSTS SITORA') || 'WHO TRUSTS SITORA'}
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}
              >
                {t('Businesses trust Sitora Web to build and grow online') || 'Businesses trust Sitora Web to build and grow online'}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'} font-sans max-w-lg`}
              >
                {t('From local businesses to growing brands, Sitora Web helps businesses build a professional digital presence that turns visitors into customers.') || 'From local businesses to growing brands, Sitora Web helps businesses build a professional digital presence that turns visitors into customers.'}
              </motion.p>
            </div>

            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6 sm:gap-10 pt-4"
            >
              <div className="space-y-2">
                <div className={`text-4xl sm:text-5xl font-mono font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  500+
                </div>
                <div className={`text-xs sm:text-sm font-sans flex items-center gap-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  <CheckCircle size={14} className="text-[#D6B16B] flex-shrink-0" />
                  <span>{t('Projects & Businesses Served') || 'Projects & Businesses Served'}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className={`text-4xl sm:text-5xl font-mono font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  4+
                </div>
                <div className={`text-xs sm:text-sm font-sans flex items-center gap-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  <Globe size={14} className="text-[#D6B16B] flex-shrink-0" />
                  <span>{t('Countries Worldwide') || 'Countries Worldwide'}</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6"
            >
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('web-dev')}
                className="group flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D6B16B] via-[#eed8ac] to-[#D6B16B] bg-[size:200%_auto] hover:bg-right hover:scale-[1.02] active:scale-[0.97] transition-all duration-150 shadow-[0_0_20px_rgba(214,177,107,0.15)] hover:shadow-[0_0_35px_rgba(214,177,107,0.3)] cursor-pointer w-full sm:w-auto"
              >
                <span>{t("LET'S WORK TOGETHER") || "LET'S WORK TOGETHER"}</span>
                <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-1" />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
