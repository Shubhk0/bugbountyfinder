
// lib/programs.ts
import { fetchPrograms } from './api'; // Make sure the path is correct

export async function generateStaticParams() {
  const programs = await fetchPrograms();
  
  return programs.map((program) => ({
    id: program.id.toString(),
  }));
}
