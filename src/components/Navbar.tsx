import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.included'), href: '#included' },
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.pricing'), href: '#pricing' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img src={logo} alt="Fersadou Travel Logo" className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tight text-white">
            Fersadou Travel
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors text-white/90 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 border-s ps-4 border-slate-300/30">
            <select 
              value={i18n.language} 
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-transparent border border-slate-300/30 rounded-md px-2 py-1 text-sm outline-none text-white"
            >
              <option value="en" className="text-black">EN</option>
              <option value="fr" className="text-black">FR</option>
              <option value="ar" className="text-black">AR</option>
            </select>
            <a 
              href="#contact"
              className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-lg shadow-blue-500/30"
            >
              {t('nav.bookNow')}
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-nav shadow-lg md:hidden border-t border-slate-200/20"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-4">
                <select 
                  value={i18n.language} 
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="bg-transparent border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-slate-800 dark:text-white outline-none w-full"
                >
                  <option value="en" className="text-black">English</option>
                  <option value="fr" className="text-black">Français</option>
                  <option value="ar" className="text-black">العربية</option>
                </select>
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center bg-primary hover:bg-blue-600 text-white px-5 py-3 rounded-full font-medium transition-all"
                >
                  {t('nav.bookNow')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
