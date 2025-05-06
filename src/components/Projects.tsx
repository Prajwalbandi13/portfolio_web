import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

type ProjectCategory = 'all' | 'frontend' | 'machine-learning' | 'full-stack';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'frontend' | 'machine-learning' | 'full-stack';
  githubUrl: string;
  liveUrl?: string;
  detailUrl: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Contextual Research Assistant",
      description: "Built an AI-powered research assistant that suggests relevant research papers, generates insightful summaries, and creates citations automatically based on user queries.",
      image: "https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React.js", "Tailwind CSS", "Python", "FastAPI", "BeautifulSoup", "Scikit-Learn", "Transformers"],
      category: "machine-learning",
      githubUrl: "https://github.com/prajwal/research-assistant",
      liveUrl: "https://research-assistant.demo",
      detailUrl: "/projects/research-assistant"
    },
    {
      id: 2,
      title: "AI-Powered Personal Finance Risk Analyzer",
      description: "Built an AI-powered financial assistant using Streamlit that analyzes users spending patterns, predicts financial risks, and provides personalized saving strategies.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Streamlit", "Scikit-Learn", "Firebase", "Machine Learning"],
      category: "machine-learning",
      githubUrl: "https://github.com/prajwal/finance-analyzer",
      detailUrl: "/projects/finance-analyzer"
    },
    {
      id: 3,
      title: "GreenLedger – Carbon Credit Trading Platform",
      description: "Developed the frontend for a blockchain-powered carbon credit marketplace, ensuring a seamless and responsive user experience.",
      image: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React.js", "Tailwind CSS", "Web3.js", "Firebase", "MetaMask"],
      category: "frontend",
      githubUrl: "https://github.com/prajwal/greenledger",
      liveUrl: "https://greenledger.demo",
      detailUrl: "/projects/green-ledger"
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'full-stack', label: 'Full-Stack' }
  ];
  
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <div className="mt-3 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning frontend development, machine learning,
            and full-stack applications.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Link to={project.detailUrl} className="block">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <div className="flex gap-3">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20  transition-colors"
                          aria-label="View on GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                            aria-label="View live project"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <span className="text-xs uppercase tracking-wider text-white/90 font-medium px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <Link to={project.detailUrl}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                </Link>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;