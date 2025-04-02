'use client';
import Button from '@/app/component/ui/button';
import { useTranslations } from 'next-intl';


export default function AboutPage() {
  const t = useTranslations('AboutPage');

  const handleContact = () => {
    console.log('Contact button clicked!');
  };


  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Express', 'GraphQL'],
    devops: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    other: ['Git', 'Agile', 'Figma', 'Jira']
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      {/* Hero Section */}


      {/* About Me Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-900/50 relative">
        <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                {t('aboutTitle')}
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-400 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 md:-top-6 md:-left-6 md:w-16 md:h-16 bg-blue-500/10 rounded-full blur-lg"></div>
                <div className="space-y-3 sm:space-y-4">
                  {t.raw("aboutParagraph").map((paragraph: string, index: number) => (
                    <p key={index} className="text-sm sm:text-base md:text-lg text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-16 w-16 md:-right-10 md:-top-10 md:h-24 md:w-24 bg-blue-500/10 rounded-full"></div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white relative z-10">
                {t('skillsTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      {t(`${category}Skills`)}
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {items.map(skill => (
                        <li key={skill} className="flex items-center">
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500 rounded-full mr-2"></span>
                          <span className="text-xs sm:text-sm md:text-base">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


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