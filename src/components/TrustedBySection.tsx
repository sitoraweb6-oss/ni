/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface TrustedBySectionProps {
  darkMode: boolean;
  onOpenInquiry?: (type?: string) => void;
}

const clientLogos = [
  "/logos/client-01.svg",
  "/logos/client-02.svg",
  "/logos/client-03.svg",
  "/logos/client-04.svg",
  "/logos/client-05.svg",
  "/logos/client-06.svg",
];

// 4 copies for a robust infinite loop (so -50% translation shifts exactly 2 copies).
const loopLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

export const TrustedBySection: React.FC<TrustedBySectionProps> = ({ darkMode, onOpenInquiry }) => {
  const { t } = useLanguage();

  return (
    <section id="trusted-by" className={`relative w-full py-24 sm:py-32 overflow-hidden ${darkMode ? 'bg-[#05070A]' : 'bg-[#FAFBFC]'}`}>
      <style>{`
        @keyframes trusted-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes trusted-scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-trusted-scroll-up {
          animation: trusted-scroll-up 35s linear infinite;
        }
        .animate-trusted-scroll-down {
          animation: trusted-scroll-down 40s linear infinite;
        }
        .animate-trusted-scroll-up-slow {
          animation: trusted-scroll-up 45s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-trusted-scroll-up, .animate-trusted-scroll-down, .animate-trusted-scroll-up-slow {
            animation-play-state: paused;
          }
        }
      `}</style>
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: LOGO SHOWCASE */}
          <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden rounded-2xl">
            {/* Top/Bottom Fade Masks */}
            <div className={`absolute top-0 left-0 w-full h-24 sm:h-32 z-10 bg-gradient-to-b ${darkMode ? 'from-[#05070A] to-transparent' : 'from-[#FAFBFC] to-transparent'} pointer-events-none`}></div>
            <div className={`absolute bottom-0 left-0 w-full h-24 sm:h-32 z-10 bg-gradient-to-t ${darkMode ? 'from-[#05070A] to-transparent' : 'from-[#FAFBFC] to-transparent'} pointer-events-none`}></div>
            
            <div className="grid grid-cols-3 gap-3 sm:gap-5 h-full relative" aria-hidden="true">
              
              {/* Column 1: Upward */}
              <div className="flex flex-col gap-3 sm:gap-5 animate-trusted-scroll-up pt-4">
                {loopLogos.map((logo, i) => (
                  <div key={`col1-${i}`} className={`flex-shrink-0 flex items-center justify-center p-4 sm:p-6 h-[80px] sm:h-[120px] rounded-xl border ${darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
                    <img src={logo} alt="" className="w-full h-full object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* Column 2: Downward */}
              <div className="flex flex-col gap-3 sm:gap-5 animate-trusted-scroll-down pb-4">
                {loopLogos.map((logo, i) => (
                  <div key={`col2-${i}`} className={`flex-shrink-0 flex items-center justify-center p-4 sm:p-6 h-[80px] sm:h-[120px] rounded-xl border ${darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
                    <img src={logo} alt="" className="w-full h-full object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* Column 3: Upward */}
              <div className="flex flex-col gap-3 sm:gap-5 animate-trusted-scroll-up-slow pt-12">
                {loopLogos.map((logo, i) => (
                  <div key={`col3-${i}`} className={`flex-shrink-0 flex items-center justify-center p-4 sm:p-6 h-[80px] sm:h-[120px] rounded-xl border ${darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
                    <img src={logo} alt="" className="w-full h-full object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col space-y-8">
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
