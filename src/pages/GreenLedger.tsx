import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GreenLedger: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <Link to="/#projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GreenLedger – Carbon Credit Trading Platform</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://github.com/Prajwalbandi13/GreenLedger.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source
            </a>
            <a 
              href="https://greenledger.demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          </div>

          <img 
            src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="GreenLedger Preview"
            className="w-[700px] h-[470px] rounded-xl shadow-lg mb-8 mx-auto object-cover"
          />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-6">
              GreenLedger is a blockchain-based platform that facilitates the trading of carbon credits. The platform provides a transparent and efficient marketplace for organizations to buy and sell carbon credits, helping to promote sustainable practices and reduce carbon emissions.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Secure MetaMask authentication</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Real-time carbon credit trading</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Transaction history and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Smart contract integration</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>Web3.js</li>
                  <li>MetaMask integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li>Firebase Authentication</li>
                  <li>Firestore Database</li>
                  <li>Ethereum Smart Contracts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
            <p className="mb-6">
              The platform leverages blockchain technology to ensure transparency and security:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Smart contracts for automated trading and verification</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Real-time market data and pricing mechanisms</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Secure wallet integration and transaction handling</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Integration with carbon offset verification systems</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Advanced analytics and reporting tools</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Mobile app development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenLedger;