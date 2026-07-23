import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
  const benefits = t('pricing.benefits', { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gradient-to-tr from-blue-200/40 to-cyan-200/40 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl pointer-events-none z-0 hidden md:block"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-primary mb-3"
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('pricing.heading')}
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
        >
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-center relative overflow-hidden">
            <motion.div 
              className="absolute -top-12 -right-12 opacity-10 pointer-events-none"
            >
              <Star className="w-48 h-48 text-white" />
            </motion.div>
            <h4 className="text-white/90 text-lg font-medium mb-2 relative z-10">{t('pricing.package')}</h4>
            <div className="flex justify-center items-end gap-2 text-white relative z-10 mb-4">
              <span className="text-6xl font-bold tracking-tight">{t('pricing.amount')}</span>
              <span className="text-xl font-medium mb-2">{t('pricing.currency')}</span>
            </div>
            <p className="text-white/80 text-sm relative z-10">{t('pricing.perPerson')}</p>
          </div>

          <div className="p-10">
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact"
              className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary hover:text-white py-4 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-[1.02]"
            >
              {t('pricing.bookBtn')}
            </a>
            <p className="text-center text-xs text-slate-500 mt-4">
              {t('pricing.limited')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
