import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sun, Droplets } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">{t('about.title')}</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                {t('about.heading1')} <br/> {t('about.heading2')}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{t('about.f1Title')}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('about.f1Desc')}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                  <Droplets className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{t('about.f2Title')}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t('about.f2Desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Beach relaxation" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-2xl p-6 text-white flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Compass className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t('about.f3Title')}</h4>
                    <p className="text-sm text-white/80">{t('about.f3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,#0ea5e9_2px,transparent_2px)] [background-size:10px_10px] opacity-20 z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
