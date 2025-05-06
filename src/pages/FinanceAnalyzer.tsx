import React from 'react';
import { ArrowLeft, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinanceAnalyzer: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <Link to="/#projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Personal Finance Risk Analyzer</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://github.com/Prajwalbandi13/FinanceShield.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source
            </a>
          </div>

          <img 
            src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Finance Analyzer Preview"
            className="w-[700px] h-[470px] rounded-xl shadow-lg mb-8 mx-auto object-cover"
          />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="mb-6">
              The AI-Powered Personal Finance Risk Analyzer is an innovative financial assistant that helps users understand and manage their financial health. Using advanced machine learning algorithms, it analyzes spending patterns, predicts potential risks, and provides personalized recommendations for better financial management.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Spending pattern analysis and categorization</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Risk prediction and early warning system</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Personalized saving strategies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Interactive financial insights dashboard</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li>Streamlit for UI</li>
                  <li>Plotly for data visualization</li>
                  <li>Custom CSS for styling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li>Python (Scikit-Learn)</li>
                  <li>Firebase Authentication</li>
                  <li>Firestore Database</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
            <p className="mb-6">
              The application uses a combination of machine learning models and financial analysis tools:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>ML models for spending pattern recognition and risk assessment</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Real-time data processing and analysis pipeline</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Secure user authentication and data storage</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Integration with banking APIs</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                <span>Advanced investment recommendations</span>
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

export default FinanceAnalyzer;