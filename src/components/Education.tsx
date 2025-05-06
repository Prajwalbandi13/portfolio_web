import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  id: number;
  title: string;
  university: string;
  location: string;
  graduation: string;
  description: string[];
}

const Education: React.FC = () => {
  const educationDetails: EducationItem[] = [
    {
      id: 1,
      title: "Bachelor of Technology in Computer Science and Business Systems",
      university: "JSS Science and Technology University",
      location: "Mysore, Karnataka, India",
      graduation: "June 2026",
      description: [
        "Studying core subjects in Computer Science and Business Systems.",
        "Focused on areas like Artificial Intelligence, Machine Learning, Cloud Computing.",
        "Gaining strong foundation in programming with C, C++, Python, JavaScript, and React.js.",
        "Active involvement in technical projects and continuous skill development."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Education</h2>
          <div className="mt-3 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and dedication towards technology and continuous learning.
          </p>
        </div>

        <div className="space-y-12">
          {educationDetails.map((education) => (
            <div 
              key={education.id} 
              className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-900"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-600"></div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{education.title}</h4>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{education.university}</div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2 sm:mb-0">
                    <MapPin size={16} className="mr-1" />
                    {education.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {education.graduation}
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  {education.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
