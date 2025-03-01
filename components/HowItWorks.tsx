import { FaSearch, FaFilter, FaCode, FaShieldAlt } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className="h-8 w-8 text-blue-600" />,
      title: "Search Programs",
      description: "Use our search and filter options to find bug bounty programs that match your skill level and interests."
    },
    {
      icon: <FaFilter className="h-8 w-8 text-purple-600" />,
      title: "Filter Results",
      description: "Filter out programs requiring KYC or involving blockchain technologies to focus on beginner-friendly options."
    },
    {
      icon: <FaCode className="h-8 w-8 text-orange-600" />,
      title: "Start Hacking",
      description: "Choose a program with a scope that matches your skills and start looking for vulnerabilities."
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-green-600" />,
      title: "Submit Reports",
      description: "Submit your findings through the program's platform and earn rewards for valid vulnerabilities."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Find the perfect bug bounty programs in just a few steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-gray-100 dark:bg-slate-700 p-4">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-slate-700 rounded-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Why Use Bug Bounty Finder?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Beginner Focused</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We specifically highlight programs that are suitable for beginners, with simpler scopes and clear documentation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No KYC or Blockchain</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We filter out programs requiring KYC verification or involving blockchain technologies to keep things simple.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Complexity Ranking</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our unique ranking system evaluates each program's suitability for beginners based on multiple factors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}