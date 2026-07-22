import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Coffee, Waves, Music, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Schedule = () => {
  const { t } = useTranslation();
  const scheduleItems = [
    {
      time: "06:00 AM",
      title: t('schedule.items.departure.title'),
      description: t('schedule.items.departure.desc'),
      icon: <MapPin className="w-5 h-5 text-white" />,
      color: "bg-blue-500"
    },
    {
      time: "09:00 AM",
      title: t('schedule.items.arrival.title'),
      description: t('schedule.items.arrival.desc'),
      icon: <Coffee className="w-5 h-5 text-white" />,
      color: "bg-amber-500"
    },
    {
      time: "10:30 AM",
      title: t('schedule.items.beach.title'),
      description: t('schedule.items.beach.desc'),
      icon: <Waves className="w-5 h-5 text-white" />,
      color: "bg-cyan-500"
    },
    {
      time: "03:00 PM",
      title: t('schedule.items.music.title'),
      description: t('schedule.items.music.desc'),
      icon: <Music className="w-5 h-5 text-white" />,
      color: "bg-purple-500"
    },
    {
      time: "07:00 PM",
      title: t('schedule.items.return.title'),
      description: t('schedule.items.return.desc'),
      icon: <Home className="w-5 h-5 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-primary mb-3"
          >
            {t('schedule.title')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('schedule.heading')}
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[48px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-[48px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 md:hidden"></div>

          <div className="space-y-12">
            {scheduleItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot/icon */}
                <div className={`absolute left-[48px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${item.color} border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center z-10 shadow-lg`}>
                  {item.icon}
                </div>

                <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${item.color}`}>
                      {item.time}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
