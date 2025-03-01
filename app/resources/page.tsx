import Link from 'next/link';
import { FaBook, FaVideo, FaTools, FaGraduationCap } from 'react-icons/fa';

export default function ResourcesPage() {
  const resources = [
    {
      category: "Learning Paths",
      icon: <FaGraduationCap className="h-8 w-8 text-blue-600" />,
      items: [
        {
          title: "Web Security Fundamentals",
          description: "Learn the basics of web security, including common vulnerabilities and how to identify them.",
          url: "#"
        },
        {
          title: "API Security Testing",
          description: "Understand how to test API endpoints for security vulnerabilities.",
          url: "#"
        },
        {
          title: "Mobile App Security",
          description: "Learn how to test mobile applications for security issues.",
          url: "#"
        }
      ]
    },
    {
      category: "Tutorials",
      icon: <FaBook className="h-8 w-8 text-purple-600" />,
      items: [
        {
          title: "Finding Your First XSS",
          description: "A step-by-step guide to finding and reporting your first Cross-Site Scripting vulnerability.",
          url: "#"
        },
        {
          title: "IDOR Vulnerabilities Explained",
          description: "Learn how to identify and exploit Insecure Direct Object Reference vulnerabilities.",
          url: "#"
        },
        {
          title: "SQL Injection for Beginners",
          description: "Understanding SQL injection vulnerabilities and how to find them.",
          url: "#"
        }
      ]
    },
    {
      category: "Video Courses",
      icon: <FaVideo className="h-8 w-8 text-red-600" />,
      items: [
        {
          title: "Bug Bounty Hunting Methodology",
          description: "A comprehensive video course on developing your own bug bounty hunting methodology.",
          url: "#"
        },
        {
          title: "Web Application Penetration Testing",
          description: "Learn web application penetration testing techniques from scratch.",
          url: "#"
        },
        {
          title: "Burp Suite Mastery",
          description: "Master Burp Suite, the most popular web vulnerability scanner and proxy tool.",
          url: "#"
        }
      ]
    },
    {
      category: "Tools",
      icon: <FaTools className="h-8 w-8 text-green-600" />,
      items: [
        {
          title: "Burp Suite",
          description: "An integrated platform for performing security testing of web applications.",
          url: "https://portswigger.net/burp"
        },
        {
          title: "OWASP ZAP",
          description: "A free, open-source web application security scanner.",
          url: "https://www.zaproxy.org/"
        },
        {
          title: "Amass",
          description: "In-depth Attack Surface Mapping and Asset Discovery tool.",
          url: "https://github.com/OWASP/Amass"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Learning Resources</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Curated resources to help you learn bug bounty hunting and web security
          </p>
        </div>
        
        <div className="space-y-12">
          {resources.map((category, index) => (
            <div key={index}>
              <div className="flex items-center mb-6">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden card-hover">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Start?</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Now that you've learned about bug bounty hunting, find a program that matches your skills
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link href="/programs" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Browse Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}