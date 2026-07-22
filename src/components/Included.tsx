import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Coffee, Umbrella, Waves, Music, HeartHandshake, Map } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Included = () => {
  const { t } = useTranslation();
  const inclusions = [
    {
      icon: <Bus className="w-8 h-8 text-blue-500" />,
      title: t('included.items.transport.title'),
      description: t('included.items.transport.desc')
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-500" />,
      title: t('included.items.breakfast.title'),
      description: t('included.items.breakfast.desc')
    },
    {
      icon: <Umbrella className="w-8 h-8 text-cyan-500" />,
      title: t('included.items.tables.title'),
      description: t('included.items.tables.desc')
    },
    {
      icon: <Map className="w-8 h-8 text-emerald-500" />,
      title: t('included.items.horse.title'),
      description: t('included.items.horse.desc')
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-400" />,
      title: t('included.items.swimming.title'),
      description: t('included.items.swimming.desc')
    },
    {
      icon: <Music className="w-8 h-8 text-purple-500" />,
      title: t('included.items.music.title'),
      description: t('included.items.music.desc')
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-coral" />,
      title: t('included.items.org.title'),
      description: t('included.items.org.desc')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="included" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-primary mb-3"
          >
            {t('included.title')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('included.heading')}
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {inclusions.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 transition-shadow hover:shadow-xl ${index === 6 ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 mx-auto' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm mb-6 border border-slate-100 dark:border-slate-700">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Included;
