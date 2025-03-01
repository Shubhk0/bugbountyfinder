import axios from 'axios';
import * as cheerio from 'cheerio';

// Types for our program data
export interface Program {
  id: number;
  name: string;
  platform: 'HackerOne' | 'Bugcrowd';
  description: string;
  complexity: 'Low' | 'Medium' | 'High';
  minBounty: string;
  scope: string;
  url: string;
  requiresKYC: boolean;
  hasBlockchain: boolean;
}

// Mock function to simulate fetching programs from HackerOne
export async function fetchHackerOnePrograms(): Promise<Program[]> {
  // In a real implementation, this would use the HackerOne API or web scraping
  // For now, we'll return mock data
  return [
    {
      id: 1,
      name: "Dropbox",
      platform: "HackerOne",
      description: "Dropbox is a file hosting service that offers cloud storage, file synchronization, and client software.",
      complexity: "Low",
      minBounty: "$500",
      scope: "Web applications, API endpoints",
      url: "https://hackerone.com/dropbox",
      requiresKYC: false,
      hasBlockchain: false
    },
    {
      id: 3,
      name: "GitHub",
      platform: "HackerOne",
      description: "GitHub is a provider of Internet hosting for software development and version control using Git.",
      complexity: "Low",
      minBounty: "$300",
      scope: "Web applications, API endpoints",
      url: "https://hackerone.com/github",
      requiresKYC: false,
      hasBlockchain: false
    }
  ];
}

// Mock function to simulate fetching programs from Bugcrowd
export async function fetchBugcrowdPrograms(): Promise<Program[]> {
  // In a real implementation, this would use the Bugcrowd API or web scraping
  // For now, we'll return mock data
  return [
    {
      id: 2,
      name: "Atlassian",
      platform: "Bugcrowd",
      description: "Atlassian develops products for software developers, project managers, and content management.",
      complexity: "Medium",
      minBounty: "$250",
      scope: "Web applications, Jira, Confluence",
      url: "https://bugcrowd.com/atlassian",
      requiresKYC: false,
      hasBlockchain: false
    },
    {
      id: 6,
      name: "Netflix",
      platform: "Bugcrowd",
      description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
      complexity: "Medium",
      minBounty: "$100",
      scope: "Web applications, API endpoints",
      url: "https://bugcrowd.com/netflix",
      requiresKYC: false,
      hasBlockchain: false
    }
  ];
}
// addd
export async function fetchPrograms(): Promise<Program[]> {
  try {
    // Fetch programs from both platforms
    const [hackerOnePrograms, bugcrowdPrograms] = await Promise.all([
      fetchHackerOnePrograms(),
      fetchBugcrowdPrograms()
    ]);
    
    // Combine programs from both platforms
    return [...hackerOnePrograms, ...bugcrowdPrograms];
  } catch (error) {
    console.error('Error fetching bug bounty programs:', error);
    return [];
  }
}
//addded above
// Function to filter out programs that require KYC or involve blockchain
export function filterPrograms(programs: Program[]): Program[] {
  return programs.filter(program => !program.requiresKYC && !program.hasBlockchain);
}

// Function to rank programs by beginner-friendliness
export function rankProgramsByBeginnerFriendliness(programs: Program[]): Program[] {
  // Simple ranking algorithm based on complexity
  const complexityScore = {
    'Low': 3,
    'Medium': 2,
    'High': 1
  };
  
  return [...programs].sort((a, b) => {
    return complexityScore[b.complexity] - complexityScore[a.complexity];
  });
}

// Main function to get all beginner-friendly programs
export async function getBeginnerFriendlyPrograms(): Promise<Program[]> {
  try {
    // Fetch programs from both platforms
    const [hackerOnePrograms, bugcrowdPrograms] = await Promise.all([
      fetchHackerOnePrograms(),
      fetchBugcrowdPrograms()
    ]);
    
    // Combine programs
    const allPrograms = [...hackerOnePrograms, ...bugcrowdPrograms];
    
    // Filter out programs requiring KYC or involving blockchain
    const filteredPrograms = filterPrograms(allPrograms);
    
    // Rank programs by beginner-friendliness
    const rankedPrograms = rankProgramsByBeginnerFriendliness(filteredPrograms);
    
    return rankedPrograms;
  } catch (error) {
    console.error('Error fetching bug bounty programs:', error);
    return [];
  }
}

// Function to search programs by keyword
export function searchProgramsByKeyword(programs: Program[], keyword: string): Program[] {
  if (!keyword) return programs;
  
  const lowercaseKeyword = keyword.toLowerCase();
  
  return programs.filter(program => {
    return (
      program.name.toLowerCase().includes(lowercaseKeyword) ||
      program.description.toLowerCase().includes(lowercaseKeyword) ||
      program.scope.toLowerCase().includes(lowercaseKeyword) ||
      program.complexity.toLowerCase().includes(lowercaseKeyword)
    );
  });
}

// In a real implementation, these functions would use actual web scraping
// Here's a simplified example of how web scraping might work for HackerOne

async function scrapeHackerOnePrograms(): Promise<Program[]> {
  try {
    // This is a simplified example and would need to be adapted for the actual HackerOne structure
    const response = await axios.get('https://hackerone.com/directory/programs');
    const html = response.data;
    const $ = cheerio.load(html);
    
    const programs: Program[] = [];
    
    // Example selector - this would need to be adjusted based on the actual page structure
    $('.program-card').each((index, element) => {
      const name = $(element).find('.program-name').text().trim();
      const description = $(element).find('.program-description').text().trim();
      const minBounty = $(element).find('.min-bounty').text().trim();
      const url = 'https://hackerone.com' + $(element).find('a').attr('href');
      
      // Check for KYC or blockchain mentions in the description
      const requiresKYC = description.toLowerCase().includes('kyc') || 
                          description.toLowerCase().includes('know your customer');
      const hasBlockchain = description.toLowerCase().includes('blockchain') || 
                            description.toLowerCase().includes('crypto') ||
                            description.toLowerCase().includes('token');
      
      // Determine complexity based on description and scope
      let complexity: 'Low' | 'Medium' | 'High' = 'Medium';
      if (description.toLowerCase().includes('beginner') || 
          description.toLowerCase().includes('simple')) {
        complexity = 'Low';
      } else if (description.toLowerCase().includes('complex') || 
                description.toLowerCase().includes('advanced')) {
        complexity = 'High';
      }
      
      programs.push({
        id: index + 1,
        name,
        platform: 'HackerOne',
        description,
        complexity,
        minBounty,
        scope: 'Web applications', // This would need to be extracted from the program details page
        url,
        requiresKYC,
        hasBlockchain
      });
    });
    
    return programs;
  } catch (error) {
    console.error('Error scraping HackerOne programs:', error);
    return [];
  }
}

//export { searchProgramsByKeyword }
