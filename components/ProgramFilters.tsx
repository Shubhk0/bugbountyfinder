'use client';

import { useState } from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';

export default function ProgramFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Filters</h2>
      
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-slate-700 dark:border-slate-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white"
            placeholder="Search keywords..."
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Platform</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="platform-all"
                name="platform"
                type="radio"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="platform-all" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                All Platforms
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="platform-hackerone"
                name="platform"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="platform-hackerone" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                HackerOne
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="platform-bugcrowd"
                name="platform"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="platform-bugcrowd" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Bugcrowd
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Complexity</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="complexity-all"
                name="complexity"
                type="radio"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="complexity-all" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                All Levels
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="complexity-low"
                name="complexity"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="complexity-low" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Low (Beginner)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="complexity-medium"
                name="complexity"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="complexity-medium" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Medium
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="complexity-high"
                name="complexity"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="complexity-high" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                High
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Minimum Payout</h3>
          <select className="block w-full py-2 px-3 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white">
            <option value="">Any Amount</option>
            <option value="50">$50+</option>
            <option value="100">$100+</option>
            <option value="250">$250+</option>
            <option value="500">$500+</option>
            <option value="1000">$1000+</option>
          </select>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Program Type</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="type-all"
                name="type"
                type="radio"
                defaultChecked
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="type-all" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                All Types
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="type-public"
                name="type"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="type-public" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Public
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="type-private"
                name="type"
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600"
              />
              <label htmlFor="type-private" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Private
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Vulnerability Types</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="vuln-xss"
                name="vuln-xss"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600 rounded"
              />
              <label htmlFor="vuln-xss" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                XSS
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="vuln-sqli"
                name="vuln-sqli"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600 rounded"
              />
              <label htmlFor="vuln-sqli" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                SQL Injection
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="vuln-idor"
                name="vuln-idor"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600 rounded"
              />
              <label htmlFor="vuln-idor" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                IDOR
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="vuln-ssrf"
                name="vuln-ssrf"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600 rounded"
              />
              <label htmlFor="vuln-ssrf" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                SSRF
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="vuln-rce"
                name="vuln-rce"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-slate-600 rounded"
              />
              <label htmlFor="vuln-rce" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                RCE
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button
          type="button"
          className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaFilter className="mr-2" />
          Apply Filters
        </button>
      </div>
    </div>
  );
}