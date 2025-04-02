'use client';
import Button from '@/app/component/ui/button';
import { useTranslations } from 'next-intl';


export default function AboutPage() {
  const t = useTranslations('AboutPage');

  const handleContact = () => {
    console.log('Contact button clicked!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
    

      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Floating shapes - Adjusted for mobile */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-400/10 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
            {t.rich('ctaTitleWithHighlight', {
              highlight: (chunks) => (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {chunks}
                </span>
              )
            })}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              text={t('scheduleCall')} 
              onClick={handleContact} 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
            <Button 
              text={t('emailMe')} 
              onClick={handleContact} 
              className="bg-transparent border border-blue-400 md:border-2 text-blue-400 hover:bg-blue-400/10 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}