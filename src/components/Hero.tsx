import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, CreditCard, ChevronDown, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100svh] pt-32 pb-40 flex flex-col items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-900/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80" 
          alt="Annaba Beach" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/20 backdrop-blur-xl rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: -100,
              x: `calc(${Math.random() * 100}vw)`,
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white mb-6"
        >
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium tracking-wide uppercase">{t('hero.presents')}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          {t('hero.annaba')} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">{t('hero.beachTrip')}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-slate-100 max-w-2xl mb-10 drop-shadow-md font-light"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mb-12 glass-card p-4 rounded-3xl"
        >
          <div className="flex items-center gap-4 px-6 py-3 border-b sm:border-b-0 sm:border-r border-white/20">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-cyan-300" />
            </div>
            <div className="text-left text-white">
              <p className="text-xs uppercase tracking-wider text-slate-300">{t('hero.dateLabel')}</p>
              <p className="font-semibold text-lg">{t('hero.date')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-3">
            <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-coral" />
            </div>
            <div className="text-left text-white">
              <p className="text-xs uppercase tracking-wider text-slate-300">{t('hero.priceLabel')}</p>
              <p className="font-semibold text-lg">{t('hero.priceValue')} <span className="text-sm font-normal text-slate-300">{t('hero.perPerson')}</span></p>
            </div>
          </div>
        </motion.div>

        <motion.a 
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-10 py-4 rounded-full text-lg font-bold shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all flex items-center gap-2 group"
        >
          {t('hero.bookButton')}
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>



      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase mb-2 opacity-70">{t('hero.scroll')}</span>
        <ChevronDown className="w-5 h-5 opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;
