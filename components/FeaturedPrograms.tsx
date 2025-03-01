'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaHackerNews, FaBug } from 'react-icons/fa';

// Mock data for featured programs
const featuredPrograms = [
  {
    id: 1,
    name: "Dropbox",
    platform: "HackerOne",
    platformIcon: <FaHackerNews />,
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
    platformIcon: <FaBug />,
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
    platformIcon: <FaHackerNews />,
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
    platformIcon: <FaHackerNews />,
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
    platformIcon: <FaHackerNews />,
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
    platformIcon: <FaBug />,
    description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    complexity: "Medium",
    minBounty: "$100",
    scope: "Web applications, API endpoints",
    url: "https://bugcrowd.com/netflix"
  }
];

export default function FeaturedPrograms() {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredPrograms = activeTab === 'all' 
    ? featuredPrograms 
    : featuredPrograms.filter(program => program.platform.toLowerCase() === activeTab);
  
  return (
    <div className="bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Programs</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Beginner-friendly bug bounty programs to get you started
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } border border-gray-300 dark:border-slate-600`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveTab('hackerone')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'hackerone'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } border-t border-b border-r border-gray-300 dark:border-slate-600`}
            >
              HackerOne
            </button>
            <button
              onClick={() => setActiveTab('bugcrowd')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                activeTab === 'bugcrowd'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              } border-t border-b border-r border-gray-300 dark:border-slate-600`}
            >
              Bugcrowd
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden card-hover">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{program.name}</h3>
                  <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    {program.platformIcon}
                    <span className="ml-1">{program.platform}</span>
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
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
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Scope:</strong> {program.scope}
                </div>
                <div className="mt-4">
                  <a
                    href={program.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View Program <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/programs" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            View All Programs
          </Link>
        </div>
      </div>
    </div>
  );
}