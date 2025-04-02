'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import PixelatedKoala from "./icon/logo";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ locale }: { locale: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body overflow when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const t = useTranslations("NavbarLinks");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(`/${newLocale}`);
    closeMenu();
  };

  const isActive = (path: string) => {
    return pathname === `/${locale}${path}` 
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-medium" 
      : "text-gray-300 hover:text-white transition-colors duration-200";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full ${isScrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800' : 'bg-gray-950/80 backdrop-blur-sm'}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[100vw] overflow-x-hidden">
        {/* Main Navigation Container */}
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${locale}`} className="flex items-center group">
              <PixelatedKoala />
              <span className="ml-3 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                IIRVANARD
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            <Link 
              href={`/${locale}`} 
              className={`px-3 py-2 text-sm lg:text-base ${isActive('')}`}
              onClick={closeMenu}
            >
              {t("home")}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className={`px-3 py-2 text-sm lg:text-base ${isActive('/about')}`}
              onClick={closeMenu}
            >
              {t("about")}
            </Link>
            <Link 
              href={`/${locale}/blog`} 
              className={`px-3 py-2 text-sm lg:text-base ${isActive('/blog')}`}
              onClick={closeMenu}
            >
              {t("blog")}
            </Link>

            {/* Language Selector - Desktop */}
            <div className="ml-4 pl-4 border-l border-gray-700">
              <select
                value={locale}
                onChange={handleLanguageChange}
                className="bg-gray-800/50 border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">EN</option>
                <option value="id">ID</option>
              </select>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform transition duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 right-0 bg-gray-950/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 border-t border-gray-800">
          <Link
            href={`/${locale}`}
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('')}`}
            onClick={closeMenu}
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/about')}`}
            onClick={closeMenu}
          >
            {t("about")}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/blog')}`}
            onClick={closeMenu}
          >
            {t("blog")}
          </Link>

          {/* Language Selector - Mobile */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <label htmlFor="mobile-language" className="block text-sm font-medium text-gray-400 mb-2">
              Language
            </label>
            <select
              id="mobile-language"
              value={locale}
              onChange={handleLanguageChange}
              className="block w-full bg-gray-800 border border-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;