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
      {/* Hero Section with floating elements */}
      <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 md:py-36 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0" />
        
        {/* Floating abstract shapes */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-lg rotate-45 blur-lg"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            {t('title')}
          </h1>
          <p className="mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-10">
            <Button 
              text={t('viewResume')} 
              onClick={handleContact} 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
            <Button 
              text={t('contactMe')} 
              onClick={handleContact} 
              className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
          </div>
        </div>
      </header>

      {/* About Me Section with illustration */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-900/50 relative">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                {t('aboutTitle')}
              </h2>
              <div className="space-y-6 text-gray-400 relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500/10 rounded-full blur-lg"></div>
                <div className="space-y-4">
                  {t.raw("aboutParagraph").map((paragraph: string, index: number) => (
                    <p key={index} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-24 w-24 bg-blue-500/10 rounded-full"></div>
              <h3 className="text-2xl font-semibold mb-6 text-white relative z-10">
                {t('skillsTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-blue-400 font-medium mb-3">
                      {t(`${category}Skills`)}
                    </h4>
                    <ul className="space-y-2">
                      {items.map(skill => (
                        <li key={skill} className="flex items-center">
                          <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                          <span>{skill}</span>
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

      {/* Experience Section with animated cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-900 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t.rich('experienceTitleWithHighlight', {
                highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{chunks}</span>
              })}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              {t('experienceSubtitle')}
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group relative p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30 overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section with visual enhancements */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-900/50 relative">
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t('educationTitle')}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              {t('educationSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="group relative p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30 overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">{edu.degree}</h3>
                      <p className="text-blue-400 mb-1">{edu.institution}</p>
                      <span className="text-gray-500 text-sm sm:text-base">{edu.period}</span>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-3">
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

      {/* Call to Action with illustration */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-cyan-400/10 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
         
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            {t.rich('ctaTitleWithHighlight', {
              highlight: (chunks) => (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {chunks}
                </span>
              )
            })}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              text={t('scheduleCall')} 
              onClick={handleContact} 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
            <Button 
              text={t('emailMe')} 
              onClick={handleContact} 
              className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-sm sm:text-base" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}