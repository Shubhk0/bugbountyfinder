import { NextResponse } from 'next/server';
import { getBeginnerFriendlyPrograms, searchProgramsByKeyword } from '@/lib/api';

export async function GET(request: Request) {
  try {
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('q') || '';
    const platform = searchParams.get('platform') || '';
    const complexity = searchParams.get('complexity') || '';
    const minPayout = searchParams.get('minPayout') || '';
    const programType = searchParams.get('type') || '';
    
    // Get all beginner-friendly programs
    let programs = await getBeginnerFriendlyPrograms();
    
    // Apply search filters
    if (keyword) {
      programs = searchProgramsByKeyword(programs, keyword);
    }
    
    // Filter by platform
    if (platform) {
      programs = programs.filter(program => 
        program.platform.toLowerCase() === platform.toLowerCase()
      );
    }
    
    // Filter by complexity
    if (complexity) {
      programs = programs.filter(program => 
        program.complexity.toLowerCase() === complexity.toLowerCase()
      );
    }
    
    // Filter by minimum payout
    if (minPayout) {
      const minAmount = parseInt(minPayout);
      programs = programs.filter(program => {
        // Extract numeric value from minBounty string (e.g., "$500" -> 500)
        const bountyAmount = parseInt(program.minBounty.replace(/[^0-9]/g, ''));
        return bountyAmount >= minAmount;
      });
    }
    
    // Return filtered programs
    return NextResponse.json({ programs });
  } catch (error) {
    console.error('Error in programs API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch programs' },
      { status: 500 }
    );
  }
}