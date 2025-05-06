import React from 'react';
import { ChevronUp, Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-2xl mb-4">
              <span className="text-white">Prajwal</span>
              <span className="text-indigo-400">Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Computer Science student passionate about frontend development and machine learning,
              creating innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/prajwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/prajwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/prajwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Get in Touch</a>
              </li>
              <li>
                <a href="mailto:prajwalsbandiwaddar@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
              </li>
              <li>
                <a href="tel:+919113991546" className="text-gray-400 hover:text-white transition-colors">Phone</a>
              </li>
              <li>
                <span className="text-gray-400">Mysore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Prajwal Bandiwaddar. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-gray-400 text-sm">Made with</p>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <p className="text-gray-400 text-sm">using React & Tailwind CSS</p>
          </div>
          <a
            href="#home"
            className="p-2 bg-gray-800 rounded-full text-white hover:bg-indigo-600 transition-colors mt-4 md:mt-0"
            aria-label="Back to top"
          >
            <ChevronUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;