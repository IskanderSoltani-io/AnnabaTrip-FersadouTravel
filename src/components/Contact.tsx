import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(t('contact.alertMsg'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-primary mb-3"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('contact.heading')}
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('contact.getInTouch')}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                {t('contact.getInTouchDesc')}
              </p>

              <div className="space-y-6">
                <a href="mailto:fersadoutravel@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">fersadoutravel@gmail.com</p>
                  </div>
                </a>

                <a href="https://instagram.com/fersadou.travel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-pink-600 group-hover:border-pink-600 transition-colors duration-300">
                    <InstagramIcon className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Instagram</p>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-pink-600 transition-colors">@fersadou.travel</p>
                  </div>
                </a>

                <a href="tel:+213556966305" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Phone</p>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">+213 556 96 63 05</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="Iskander Soltani"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                  placeholder="+213 XX XX XX XX"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message (Optional)</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Tell us about any specific requirements or questions..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
              >
                {t('contact.formSubmit')}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Interactive Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 w-full h-[400px] rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg relative"
        >
          {/* Simple iframe for Annaba Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102029.07062402243!2d7.674996395371509!3d36.9069695420227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f007c08a90ec45%3A0xc0fb1df8a167d4cc!2sAnnaba%2C%20Algeria!5e0!3m2!1sen!2sus!4v1714578167389!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter dark:invert-[90%] dark:hue-rotate-180"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
