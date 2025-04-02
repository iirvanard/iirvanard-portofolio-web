'use client';
import { useTranslations } from 'next-intl';
import Button from '../component/ui/button';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export default function HomePage() {
  const t = useTranslations('HomePage');

  const handleContact = () => {
    console.log('Contact button clicked!');
  };

  const handleProjectView = (projectId: number) => {
    console.log(`Viewing project ${projectId}`);
  };

  const projects = t.raw("projects") as Project[];

  const technologies = [
    // Frontend
    { name: "JavaScript", category: "Frontend", icon: "/tech-icons/js.svg" },
    { name: "TypeScript", category: "Frontend", icon: "/tech-icons/ts.svg" },
    { name: "React", category: "Frontend", icon: "/tech-icons/react.svg" },
    { name: "Next.js", category: "Fullstack", icon: "/tech-icons/next.svg" },
    
    // Backend
    { name: "Node.js", category: "Backend", icon: "/tech-icons/node.svg" },
    { name: "Python", category: "Backend", icon: "/tech-icons/python.svg" },
    { name: "Flask", category: "Backend", icon: "/tech-icons/flask.svg" },
    { name: "Laravel", category: "Backend", icon: "/tech-icons/laravel.svg" },
    { name: "PHP", category: "Backend", icon: "/tech-icons/php.svg" },
    
    // Mobile
    { name: "Flutter", category: "Mobile", icon: "/tech-icons/flutter.svg" },
    
    // Databases
    { name: "Firebase", category: "Database", icon: "/tech-icons/firebase.svg" },
    { name: "PostgreSQL", category: "Database", icon: "/tech-icons/postgresql.svg" },
    { name: "MySQL", category: "Database", icon: "/tech-icons/mysql.svg" },
    { name: "Redis", category: "Database", icon: "/tech-icons/redis.svg" },
    { name: "Prisma", category: "Database", icon: "/tech-icons/prisma.svg" },
    { name: "SQLAlchemy", category: "Database", icon: "/tech-icons/sqlalchemy.svg" },
    
    // DevOps & Cloud
    { name: "Docker", category: "DevOps", icon: "/tech-icons/docker.svg" },
    { name: "Celery", category: "DevOps", icon: "/tech-icons/celery.svg" },
    { name: "GitHub", category: "DevOps", icon: "/tech-icons/github.svg" },
  ];

  // Group technologies by category
  const techByCategory = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 md:py-36 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0" />
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-cover" />
        
        {/* Floating abstract shapes */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-lg rotate-45 blur-lg"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {t('title')}
            </h1>
            <p className="mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">
              <Button 
                text={t('exploreProjects')} 
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
          
          <div className="hidden md:block flex-1">
            <Image 
              src="/flat-design/hero-illustration.svg" 
              alt="Developer illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t('projectsTitle')}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              {t('projectsSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {projects.map((project,index) => (
              <div 
                key={index} 
                className="group relative p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30 overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 mb-4 sm:mb-6 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center text-lg sm:text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs bg-gray-700 text-blue-300 px-2 sm:px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    text={t('viewCaseStudy')} 
                    onClick={() => handleProjectView(index)} 
                    className="text-xs sm:text-sm bg-transparent text-blue-400 hover:text-blue-300 px-3 sm:px-4 py-1 sm:py-2 border border-blue-500 hover:border-blue-400 rounded-lg transition-colors" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-900 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-white">
              {t.rich('expertiseTitleWithHighlight', {
                highlight: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {chunks}
                  </span>
                )
              })}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              {t('expertiseSubtitle')}
            </p>
          </div>

          {/* Grouped by categories */}
          {Object.entries(techByCategory).map(([category, techs]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {techs.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-700 hover:border-blue-500/30 flex flex-col items-center group"
                  >
                    <div className="h-16 w-16 mb-3 sm:mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      {tech.icon ? (
                        <Image 
                          src={tech.icon}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 filter brightness-0 invert-[0.8] sepia-[1] saturate-[5] hue-rotate-[180deg]"
                        />
                      ) : (
                        tech.name.split(' ')[0].charAt(0)
                      )}
                    </div>
                    <span className="font-medium text-white mb-1 text-sm sm:text-base text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-cover opacity-5" />
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