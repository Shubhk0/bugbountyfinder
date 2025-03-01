export async function generateStaticParams() {
  const programs = await fetchPrograms(); // Replace with actual data fetching
  return programs.map((program) => ({
    id: program.id.toString(),
  }));
}
