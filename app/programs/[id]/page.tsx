'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaHackerNews, FaBug, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { generateStaticParams } from "@/lib/programs"; // Import function
// Mock data for program details

const programsData = [
  {
    id: 1,
    name: "Dropbox",
    platform: "HackerOne",
    platformIcon: <FaHackerNews />,
    description: "Dropbox is a file hosting service that offers cloud storage, file synchronization, and client software.",
    longDescription: "Dropbox is a file hosting service operated by the American company Dropbox, Inc., headquartered in San Francisco, California, that offers cloud storage, file synchronization, personal cloud, and client software. Dropbox was founded in 2007 by MIT students Drew Houston and Arash Ferdowsi as a startup company, with initial funding from seed accelerator Y Combinator.",
    complexity: "Low",
    minBounty: "$500",
    maxBounty: "$10,000",
    scope: "Web applications, API endpoints",
    url: "https://hackerone.com/dropbox",
    inScope: [
      "*.dropbox.com",
      "*.dropboxapi.com",
      "Dropbox mobile applications"
    ],
    outOfScope: [
      "Physical security",
      "Social engineering",
      "Dropbox infrastructure"
    ],
    vulnerabilityTypes: [
      "Cross-site Scripting (XSS)",
      "Cross-site Request Forgery (CSRF)",
      "Server-side Request Forgery (SSRF)",
      "SQL Injection",
      "Remote Code Execution (RCE)"
    ],
    requiresKYC: false,
    hasBlockchain: false,
    hasPublicReports: true,
    hasDocumentation: true,
    responseTime: "Usually within 24 hours",
    avgPayout: "$1,200",
    beginnerFriendlyRating: 4.5
  },
  {
    id: 2,
    name: "Atlassian",
    platform: "Bugcrowd",
    platformIcon: <FaBug />,
    description: "Atlassian develops products for software developers, project managers, and content management.",
    longDescription: "Atlassian Corporation Plc is an Australian software company that develops products for software developers, project managers, and other software development teams. The company is domiciled in the UK, with global headquarters in Sydney, Australia, and U.S. headquarters in San Francisco.",
    complexity: "Medium",
    minBounty: "$250",
    maxBounty: "$5,000",
    scope: "Web applications, Jira, Confluence",
    url: "https://bugcrowd.com/atlassian",
    inScope: [
      "*.atlassian.com",
      "*.atlassian.net",
      "Jira Cloud",
      "Confluence Cloud",
      "Bitbucket Cloud"
    ],
    outOfScope: [
      "On-premise installations",
      "Third-party plugins",
      "Social engineering"
    ],
    vulnerabilityTypes: [
      "Cross-site Scripting (XSS)",
      "Cross-site Request Forgery (CSRF)",
      "Server-side Request Forgery (SSRF)",
      "Insecure Direct Object References (IDOR)",
      "Authentication Bypass"
    ],
    requiresKYC: false,
    hasBlockchain: false,
    hasPublicReports: true,
    hasDocumentation: true,
    responseTime: "Usually within 48 hours",
    avgPayout: "$750",
    beginnerFriendlyRating: 3.8
  }
];


export default function ProgramDetailPage() {
  const { id } = useParams();
  const programId = parseInt(id as string);
  
  const program = programsData.find(p => p.id === programId);
  
  if (!program) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/programs" className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline">
            <FaArrowLeft className="mr-2" /> Back to Programs
          </Link>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mr-2">{program.name}</h1>
                  <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    {program.platformIcon}
                    <span className="ml-1">{program.platform}</span>
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium complexity-${program.complexity.toLowerCase()}`}>
                    {program.complexity} Complexity
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {program.minBounty} - {program.maxBounty}
                  </span>
                  {program.hasPublicReports && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Public Reports
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <a
                  href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  View on {program.platform} <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Program Description</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {program.longDescription}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Scope</h2>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">In Scope</h3>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      {program.inScope.map((item, index) => (
                        <li key={index} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Out of Scope</h3>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                      {program.outOfScope.map((item, index) => (
                        <li key={index} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Vulnerability Types</h2>
                  <div className="flex flex-wrap gap-2">
                    {program.vulnerabilityTypes.map((type, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Program Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Beginner Friendly Rating</h3>
                      <div className="mt-1 flex items-center">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                          <div 
                            className="h-2 bg-blue-600 rounded-full" 
                            style={{ width: `${(program.beginnerFriendlyRating / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          {program.beginnerFriendlyRating}/5
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Average Payout</h3>
                      <p className="mt-1 text-sm text-gray-900 dark:text-white">{program.avgPayout}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Response Time</h3>
                      <p className="mt-1 text-sm text-gray-900 dark:text-white">{program.responseTime}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Requirements</h3>
                      <div className="mt-1 space-y-2">
                        <div className="flex items-center">
                          {program.requiresKYC ? (
                            <FaCheckCircle className="h-5 w-5 text-red-500" />
                          ) : (
                            <FaTimesCircle className="h-5 w-5 text-green-500" />
                          )}
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            Requires KYC
                          </span>
                        </div>
                        <div className="flex items-center">
                          {program.hasBlockchain ? (
                            <FaCheckCircle className="h-5 w-5 text-red-500" />
                          ) : (
                            <FaTimesCircle className="h-5 w-5 text-green-500" />
                          )}
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            Involves Blockchain
                          </span>
                        </div>
                        <div className="flex items-center">
                          {program.hasPublicReports ? (
                            <FaCheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <FaTimesCircle className="h-5 w-5 text-red-500" />
                          )}
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            Has Public Reports
                          </span>
                        </div>
                        <div className="flex items-center">
                          {program.hasDocumentation ? (
                            <FaCheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <FaTimesCircle className="h-5 w-5 text-red-500" />
                          )}
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            Has Documentation
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
