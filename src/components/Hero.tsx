import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="absolute top-0 left-0 right-0 h-full w-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-medium text-indigo-600 dark:text-indigo-400 animate-fade-in">Hello, I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in animation-delay-200">
                Prajwal Bandiwaddar
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 animate-fade-in animation-delay-400">
                Frontend Developer & ML Engineer
              </p>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl animate-fade-in animation-delay-600">
              Computer Science student at JSS Science and Technology University, passionate about creating websites and solving DSA problems. Experienced in frontend development and machine learning, with a strong focus on building innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-800">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors inline-flex items-center group"
              >
                View Projects
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium rounded-md transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex gap-4 animate-fade-in animation-delay-1000">
              <a 
                href="https://github.com/Prajwalbandi13" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/prajwal-bandiwaddar-37563b24a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/prajwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
  <div className="w-full h-[500px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-xl transform -rotate-6 scale-95 opacity-20 dark:opacity-10"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-72 h-96 rounded-[50%/40%] overflow-hidden border-4 border-white dark:border-gray-800 bg-white">
      <img 
        src="https://assets.onecompiler.app/43buvb4fd/43g65xuk9/Photo.jpg" 
        alt="Profile" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;