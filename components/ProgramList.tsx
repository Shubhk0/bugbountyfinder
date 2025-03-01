'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaHackerNews, FaBug, FaSortAmountDown, FaSortAmountUp, FaSpinner } from 'react-icons/fa';

// Program type definition
interface Program {
  id: number;
  name: string;
  platform: string;
  description: string;
  complexity: string;
  minBounty: string;
  scope: string;
  url: string;
}

export default function ProgramList() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('complexity');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 6;
  
  // Fetch programs from API
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would call the API
        // For now, we'll use the mock data
        
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockPrograms = [
          {
            id: 1,
            name: "Dropbox",
            platform: "HackerOne",
            description: "Dropbox is a file hosting service that offers cloud storage, file synchronization, and client software.",
            complexity: "Low",
            minBounty: "$500",
            scope: "Web applications, API endpoints",
            url: "https://hackerone.com/dropbox"
          },
          {
            id: 2,
            name: "Atlassian",
            platform: "Bugcrowd",
            description: "Atlassian develops products for software developers, project managers, and content management.",
            complexity: "Medium",
            minBounty: "$250",
            scope: "Web applications, Jira, Confluence",
            url: "https://bugcrowd.com/atlassian"
          },
          {
            id: 3,
            name: "GitHub",
            platform: "HackerOne",
            description: "GitHub is a provider of Internet hosting for software development and version control using Git.",
            complexity: "Low",
            minBounty: "$300",
            scope: "Web applications, API endpoints",
            url: "https://hackerone.com/github"
          },
          {
            id: 4,
            name: "Shopify",
            platform: "HackerOne",
            description: "Shopify is a commerce platform that allows anyone to set up an online store and sell their products.",
            complexity: "Low",
            minBounty: "$500",
            scope: "Web applications, API endpoints",
            url: "https://hackerone.com/shopify"
          },
          {
            id: 5,
            name: "Slack",
            platform: "HackerOne",
            description: "Slack is a proprietary business communication platform developed by American software company Slack Technologies.",
            complexity: "Medium",
            minBounty: "$100",
            scope: "Web applications, Desktop clients",
            url: "https://hackerone.com/slack"
          },
          {
            id: 6,
            name: "Netflix",
            platform: "Bugcrowd",
            description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
            complexity: "Medium",
            minBounty: "$100",
            scope: "Web applications, API endpoints",
            url: "https://bugcrowd.com/netflix"
          },
          {
            id: 7,
            name: "Twitter",
            platform: "HackerOne",
            description: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets.",
            complexity: "Medium",
            minBounty: "$280",
            scope: "Web applications, Mobile applications",
            url: "https://hackerone.com/twitter"
          },
          {
            id: 8,
            name: "Airbnb",
            platform: "HackerOne",
            description: "Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locales.",
            complexity: "Low",
            minBounty: "$200",
            scope: "Web applications, API endpoints",
            url: "https://hackerone.com/airbnb"
          },
          {
            id: 9,
            name: "Yelp",
            platform: "HackerOne",
            description: "Yelp is a business directory service and crowd-sourced review forum.",
            complexity: "Low",
            minBounty: "$100",
            scope: "Web applications, Mobile applications",
            url: "https://hackerone.com/yelp"
          },
          {
            id: 10,
            name: "Spotify",
            platform: "Bugcrowd",
            description: "Spotify is a digital music, podcast, and video streaming service that gives you access to millions of songs and other content from artists all over the world.",
            complexity: "Medium",
            minBounty: "$250",
            scope: "Web applications, Desktop clients, Mobile applications",
            url: "https://bugcrowd.com/spotify"
          },
          {
            id: 11,
            name: "PayPal",
            platform: "HackerOne",
            description: "PayPal is an American company operating an online payments system in the majority of countries that support online money transfers.",
            complexity: "High",
            minBounty: "$500",
            scope: "Web applications, API endpoints",
            url: "https://hackerone.com/paypal"
          },
          {
            id: 12,
            name: "Uber",
            platform: "HackerOne",
            description: "Uber Technologies, Inc. is an American technology company that offers services that include ride-hailing, food delivery, package delivery, couriers, and freight transportation.",
            complexity: "Medium",
            minBounty: "$500",
            scope: "Web applications, Mobile applications",
            url: "https://hackerone.com/uber"
          }
        ];
        
        setPrograms(mockPrograms);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch programs. Please try again later.');
        setLoading(false);
        console.error('Error fetching programs:', err);
      }
    };
    
    fetchPrograms();
  }, []);
  
  // Sort programs
  const sortedPrograms = [...programs].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc' 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'complexity') {
      //const complexityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
      const complexityOrder: Record<string, number> = { Low: 1, Medium: 2, High: 3 };
      return sortOrder === 'asc' 
        ? complexityOrder[a.complexity] - complexityOrder[b.complexity] 
        : complexityOrder[b.complexity] - complexityOrder[a.complexity];
    } else if (sortBy === 'minBounty') {
      const getAmount = (str) => parseInt(str.replace(/[^0-9]/g, ''));
      return sortOrder === 'asc' 
        ? getAmount(a.minBounty) - getAmount(b.minBounty) 
        : getAmount(b.minBounty) - getAmount(a.minBounty);
    }
    return 0;
  });
  
  // Pagination
  const indexOfLastProgram = currentPage * programsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
  const currentPrograms = sortedPrograms.slice(indexOfFirstProgram, indexOfLastProgram);
  const totalPages = Math.ceil(programs.length / programsPerPage);
  
  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };
  
  // Platform icon component
  const PlatformIcon = ({ platform }) => {
    return platform === 'HackerOne' ? 
      <FaHackerNews className="inline mr-1" /> : 
      <FaBug className="inline mr-1" />;
  };
  
  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 flex justify-center items-center">
        <FaSpinner className="animate-spin h-8 w-8 text-blue-600 dark:text-blue-500" />
        <span className="ml-2 text-gray-700 dark:text-gray-300">Loading programs...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
        <div className="text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Programs ({programs.length})
          </h2>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
            
            <button
              onClick={() => toggleSort('name')}
              className={`flex items-center text-sm ${
                sortBy === 'name' ? 'text-blue-600 dark:text-blue-500 font-medium' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Name
              {sortBy === 'name' && (
                sortOrder === 'asc' ? <FaSortAmountUp className="ml-1" /> : <FaSortAmountDown className="ml-1" />
              )}
            </button>
            
            <button
              onClick={() => toggleSort('complexity')}
              className={`flex items-center text-sm ${
                sortBy === 'complexity' ? 'text-blue-600 dark:text-blue-500 font-medium' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Complexity
              {sortBy === 'complexity' && (
                sortOrder === 'asc' ? <FaSortAmountUp className="ml-1" /> : <FaSortAmountDown className="ml-1" />
              )}
            </button>
            
            <button
              onClick={() => toggleSort('minBounty')}
              className={`flex items-center text-sm ${
                sortBy === 'minBounty' ? 'text-blue-600 dark:text-blue-500 font-medium' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Bounty
              {sortBy === 'minBounty' && (
                sortOrder === 'asc' ? <FaSortAmountUp className="ml-1" /> : <FaSortAmountDown className="ml-1" />
              )}
            </button>
          </div>
        </div>
        
        {currentPrograms.length === 0 ? (
          <div className="p-8 text-center text-gray-600 dark:text-gray-400">
            No programs found matching your criteria.
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentPrograms.map((program) => (
              <div key={program.id} className="p-6 hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mr-2">{program.name}</h3>
                      <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <PlatformIcon platform={program.platform} />
                        <span className="ml-1">{program.platform}</span>
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {program.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium complexity-${program.complexity.toLowerCase()}`}>
                        {program.complexity} Complexity
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Min: {program.minBounty}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Scope:</strong> {program.scope}
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start">
                    <Link
                      href={`/programs/${program.id}`}
                      className="mb-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      View Details
                    </Link>
                    
                    <a
                      href={program.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Visit Program <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 dark:bg-slate-700 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium ${
                currentPage === 1
                  ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600'
              }`}
            >
              Previous
            </button>
            
            <div className="flex items-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`mx-1 px-3 py-1 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium ${
                currentPage === totalPages
                  ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-600'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
