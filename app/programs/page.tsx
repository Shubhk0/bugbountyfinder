import ProgramList from '@/components/ProgramList';
import ProgramFilters from '@/components/ProgramFilters';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bug Bounty Programs</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Find beginner-friendly bug bounty programs from HackerOne and Bugcrowd
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <ProgramFilters />
          </div>
          
          <div className="lg:w-3/4">
            <ProgramList />
          </div>
        </div>
      </div>
    </div>
  );
}