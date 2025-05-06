import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchAssistant: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <Link to="/#projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Contextual Research Assistant</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://github.com/Prajwalbandi13/Favicon_TheSecondMind.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source
            </a>
            <a 
              href="https://research-assistant.demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          </div>

          <img 
            src="https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Research Assistant Preview"
            className="w-[700px] h-[470px] rounded-xl shadow-lg mb-8 mx-auto object-cover"
          />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-6">
              The AI-Powered Contextual Research Assistant is a sophisticated tool designed to streamline the academic research process. It leverages advanced NLP techniques to analyze research papers, generate comprehensive summaries, and provide relevant citations, making scholarly research more efficient and accessible.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Smart paper recommendations based on user queries and research context</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Automated generation of paper summaries highlighting key findings and methodologies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Citation generation in multiple formats (APA, MLA, Chicago)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Web scraping integration for real-time paper retrieval</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li>React.js for UI components</li>
                  <li>Tailwind CSS for styling</li>
                  <li>TypeScript for type safety</li>
                  <li>React Query for data fetching</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li>Python FastAPI</li>
                  <li>BeautifulSoup for web scraping</li>
                  <li>Scikit-Learn for ML models</li>
                  <li>Transformers for NLP tasks</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
            <p className="mb-6">
              The project implements a microservices architecture where different components handle specific tasks:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Paper Recommendation Service: Uses ML models to suggest relevant papers based on user queries</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Summarization Service: Employs transformer models to generate concise paper summaries</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Citation Service: Handles automatic generation of citations in various formats</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Integration with more academic databases</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Enhanced ML models for better paper recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Collaborative features for research teams</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAssistant;