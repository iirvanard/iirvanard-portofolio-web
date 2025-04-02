'use client';
import Button from '@/app/component/ui/button';
import { useTranslations } from 'next-intl';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  const handleContact = () => {
    console.log('Contact button clicked!');
  };

  const experiences = t.raw("experiences") as Experience[];
  const education = t.raw("education") as Education[];

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Express', 'GraphQL'],
    devops: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    other: ['Git', 'Agile', 'Figma', 'Jira']
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0" />
        
        {/* Floating abstract shapes - Adjusted for mobile */}
        <div className="absolute top-10 right-10 w-20 h-20 md:top-20 md:right-20 md:w-40 md:h-40 rounded-full bg-blue-500/10 blur-xl"></div>
        <div className="absolute bottom-5 left-5 w-16 h-16 md:bottom-10 md:left-10 md:w-32 md:h-32 bg-cyan-400/10 rounded-lg rotate-45 blur-lg"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 md:mt-10">
            <Button 
              text={t('viewResume')} 
              onClick={handleContact} 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
            <Button 
              text={t('contactMe')} 
              onClick={handleContact} 
              className="bg-transparent border border-blue-400 md:border-2 text-blue-400 hover:bg-blue-400/10 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
<section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-900/50 relative w-full overflow-hidden">
  <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
  
  <div className="max-w-7xl mx-auto w-full px-4 sm:px-0">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 w-full">
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
          {t('aboutTitle')}
        </h2>
        <div className="space-y-4 sm:space-y-6 text-gray-400 relative w-full">
          <div className="absolute -top-4 -left-4 w-12 h-12 md:-top-6 md:-left-6 md:w-16 md:h-16 bg-blue-500/10 rounded-full blur-lg -z-10"></div>
          <div className="space-y-3 sm:space-y-4 w-full">
            {t.raw("aboutParagraph").map((paragraph: string, index: number) => (
              <p key={index} className="text-sm sm:text-base md:text-lg text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden w-full">
        <div className="absolute -right-6 -top-6 h-16 w-16 md:-right-10 md:-top-10 md:h-24 md:w-24 bg-blue-500/10 rounded-full -z-10"></div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white relative z-10">
          {t('skillsTitle')}
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10 w-full">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="w-full">
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

      {/* Experience Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-900 relative">
        <div className="absolute top-0 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t.rich('experienceTitleWithHighlight', {
                highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{chunks}</span>
              })}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              {t('experienceSubtitle')}
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group relative p-5 sm:p-6 md:p-8 bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30 overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 md:-right-10 md:-top-10 md:h-24 md:w-24 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-blue-400 text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-900/50 relative">
        <div className="absolute top-1/4 left-5 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400/10 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
              {t('educationTitle')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              {t('educationSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="group relative p-5 sm:p-6 md:p-8 bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30 overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 md:-right-10 md:-top-10 md:h-24 md:w-24 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">{edu.degree}</h3>
                      <p className="text-blue-400 text-sm sm:text-base mb-1">{edu.institution}</p>
                      <span className="text-gray-500 text-xs sm:text-sm md:text-base">{edu.period}</span>
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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