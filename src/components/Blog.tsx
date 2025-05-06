import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Responsive React Applications with Tailwind CSS",
      excerpt: "Learn how to create beautiful and responsive user interfaces using React and Tailwind CSS with these best practices.",
      date: "May 15, 2025",
      readTime: "8 min read",
      category: "Frontend",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/blog/responsive-react-tailwind"
    },
    {
      id: 2,
      title: "Introduction to Neural Networks for Frontend Developers",
      excerpt: "Discover how machine learning concepts can be applied to frontend development to create smarter user experiences.",
      date: "April 28, 2025",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/blog/neural-networks-frontend"
    },
    {
      id: 3,
      title: "State Management in React: Context API vs. Redux",
      excerpt: "A comprehensive comparison of different state management approaches in React applications with practical examples.",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "Frontend",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/blog/react-state-management"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
          <div className="mt-3 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I share my thoughts and experiences on frontend development, machine learning,
            and other tech topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium group"
                >
                  Read more
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog"
            className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-md transition-colors inline-block"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;