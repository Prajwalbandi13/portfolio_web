import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ml' | 'design';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend Skills
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 88, category: 'frontend' },
    { name: 'HTML/CSS', level: 92, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    
    // Backend Skills
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express.js', level: 82, category: 'backend' },
    { name: 'REST APIs', level: 88, category: 'backend' },
    { name: 'SQL', level: 85, category: 'backend' },
    { name: 'AWS', level: 80, category: 'backend' },
    
    // Machine Learning Skills
    { name: 'Python', level: 90, category: 'ml' },
    { name: 'Scikit-Learn', level: 85, category: 'ml' },
    { name: 'TensorFlow', level: 80, category: 'ml' },
    { name: 'NLP', level: 82, category: 'ml' },
    { name: 'AI/ML', level: 85, category: 'ml' },
    
    // Additional Skills
    { name: 'Git/GitHub', level: 88, category: 'design' },
    { name: 'Cloud Computing', level: 85, category: 'design' },
    { name: 'Problem Solving', level: 90, category: 'design' },
  ];

  const categories = [
    { id: 'frontend', label: 'Frontend Development' },
    { id: 'backend', label: 'Backend Development' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'design', label: 'Additional Skills' }
  ];

  const getSkillColor = (category: string) => {
    switch(category) {
      case 'frontend': return 'from-blue-500 to-indigo-600';
      case 'backend': return 'from-green-500 to-emerald-600';
      case 'ml': return 'from-purple-500 to-violet-600';
      case 'design': return 'from-pink-500 to-rose-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h2>
          <div className="mt-3 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical skills cover a wide range of technologies across frontend development,
            backend systems, machine learning, and more.
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{category.label}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${getSkillColor(skill.category)}`}
                          style={{ width: `${skill.level}%` }}
                        >
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Languages</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Major Projects</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">15+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Technologies</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Certificates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;