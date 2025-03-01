import { NextResponse } from 'next/server';
import { getBeginnerFriendlyPrograms } from '@/lib/api';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Get all programs
    const programs = await getBeginnerFriendlyPrograms();
    
    // Find the specific program
    const program = programs.find(p => p.id === id);
    
    if (!program) {
      return NextResponse.json(
        { error: 'Program not found' },
        { status: 404 }
      );
    }
    
    // In a real implementation, we would fetch additional details here
    // For now, we'll add some mock additional details
    const programDetails = {
      ...program,
      longDescription: `${program.description} This is an extended description with more details about the program.`,
      maxBounty: program.minBounty.replace('$', '$') + '0',
      inScope: [
        `*.${program.name.toLowerCase()}.com`,
        `${program.name} web applications`,
        `${program.name} API endpoints`
      ],
      outOfScope: [
        "Physical security",
        "Social engineering",
        `${program.name} infrastructure`
      ],
      vulnerabilityTypes: [
        "Cross-site Scripting (XSS)",
        "Cross-site Request Forgery (CSRF)",
        "Server-side Request Forgery (SSRF)",
        "SQL Injection",
        "Remote Code Execution (RCE)"
      ],
      hasPublicReports: Math.random() > 0.5,
      hasDocumentation: true,
      responseTime: "Usually within 48 hours",
      avgPayout: `$${Math.floor(Math.random() * 900) + 100}`,
      beginnerFriendlyRating: (Math.random() * 2 + 3).toFixed(1)
    };
    
    return NextResponse.json({ program: programDetails });
  } catch (error) {
    console.error('Error in program details API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch program details' },
      { status: 500 }
    );
  }
}