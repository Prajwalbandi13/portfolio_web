import React from 'react';
import { Code, Brain, FileCode, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-3 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a Computer Science student at JSS Science and Technology University, graduating in 2026. I'm passionate about creating websites and solving DSA problems, with a strong focus on frontend development and machine learning.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My technical journey spans multiple programming languages including C, C++, Python, and JavaScript. I've developed expertise in modern web technologies like React.js and Node.js, while also exploring machine learning and artificial intelligence.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I believe in continuous learning and improvement, always striving to expand my knowledge and skills. My goal is to create innovative solutions that combine beautiful user interfaces with intelligent functionality.
            </p>
            
            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mb-4">
                <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building responsive web applications with React, TypeScript, and modern frontend frameworks.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developing ML models for computer vision and natural language processing applications.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                <FileCode className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solving complex DSA problems and implementing efficient algorithms.
              </p>
            </div>
            
            <div className="bg-cyan-50 dark:bg-gray-800 p-6 rounded-xl transition-transform hover:scale-105">
              <div className="inline-block p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg mb-4">
                <Terminal className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cloud Computing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Working with AWS and Google Cloud Platform for scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;