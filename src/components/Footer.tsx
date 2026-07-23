import { Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <img src={logo} alt="Fersadou Travel Logo" className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Fersadou Travel
              </span>
            </a>
            <p className="text-sm text-slate-400">
              {t('footer.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://instagram.com/fersadou.travel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a 
              href="mailto:fersadoutravel@gmail.com"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+213556966305"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} {t('footer.rights')} Crafted by Iskander Soltani</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
