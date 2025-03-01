import { FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About Bug Bounty Finder</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Helping beginners find suitable bug bounty programs
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Bug Bounty Finder was created to help beginners in the field of ethical hacking and bug bounty hunting find suitable programs to start their journey. We understand that getting started in bug bounty hunting can be overwhelming, especially with the vast number of programs available across different platforms.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Our platform specifically focuses on identifying and highlighting beginner-friendly bug bounty programs that don't require KYC verification or involve blockchain technologies, making it easier for newcomers to get started and gain experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-4">
                    <FaShieldAlt className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Beginner Focused</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We prioritize programs with simpler scopes and clear documentation to help beginners get started.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-4">
                    <FaUsers className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Driven</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our platform is built with input from the ethical hacking community to ensure relevance and usefulness.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-orange-100 dark:bg-orange-900 p-4">
                    <FaLightbulb className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Educational</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide resources and learning materials to help users improve their skills and knowledge.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Rank Programs</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our unique ranking system evaluates each program's suitability for beginners based on multiple factors:
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>Scope Simplicity:</strong> Programs with smaller, more focused scopes are ranked higher for beginners.</li>
                <li><strong>Documentation Quality:</strong> We prioritize programs with clear, comprehensive documentation.</li>
                <li><strong>Public Reports:</strong> Programs that share public reports provide valuable learning opportunities.</li>
                <li><strong>Response Time:</strong> Faster response times from program teams create a better learning experience.</li>
                <li><strong>Minimum Payouts:</strong> Programs with reasonable minimum payouts for valid findings are highlighted.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Bug Bounty Finder is not affiliated with HackerOne, Bugcrowd, or any of the programs listed on our platform. We simply aggregate and analyze publicly available information to help beginners find suitable programs. Always make sure to read and follow the rules and guidelines of each program before submitting any reports.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                The information provided on this website is for educational purposes only. Always practice ethical hacking and only test systems for which you have explicit permission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}