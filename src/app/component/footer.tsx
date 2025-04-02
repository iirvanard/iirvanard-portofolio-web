'use client';
import { useTranslations } from "next-intl";
import Button from "./ui/button";

const Footer = ({ locale }: { locale: string }) => {
  const handleSubscribe = () => {
    console.log('Subscribe button clicked!');
  };
  const tFooter = useTranslations("Footer");
  const tNav = useTranslations("NavbarLinks");

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              IIRVANARD
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
          {tFooter("Title")}
          </p>
          <div className="flex space-x-4">
            {/* Social Icons would go here */}
          </div>
        </div>

        {/* Links Columns */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white">{tFooter("navigation")}</h3>
          <ul className="space-y-3">
            
            <li><a href={`/${locale}/`} className="hover:text-blue-400 transition-colors">{tNav("home")}</a></li>
            <li><a href={`/${locale}/about`} className="hover:text-blue-400 transition-colors">{tNav("about")}</a></li>
            <li><a href={`/${locale}/blog`} className="hover:text-blue-400 transition-colors">{tNav("blog")}</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white">{tFooter("resources")}</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Tutorials</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white">{tFooter("Newsletter.Heading")}</h3>
          <p className="text-gray-400">{tFooter("Newsletter.Description")}</p>
          <div className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder={tFooter("Newsletter.EmailPlaceholder")}
              className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button 
              text={tFooter("Newsletter.ButtonText")}
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
          {tFooter("Copyright")}
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
            {tFooter("PrivacyPolicy")}</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm"> {tFooter("TermsOfService")}</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm"> {tFooter("Cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;