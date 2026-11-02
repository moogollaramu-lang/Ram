import type { Project, SkillGroup } from '../data/portfolioData';

/**
 * Creates a safely encoded mailto URL for project inquiries or contacts
 */
export function createMailtoLink(
  email: string,
  subject: string = "Project inquiry / Opportunity for Python Developer",
  body?: string
): string {
  const defaultBody =
    "Hi Ramu,\n\nI reviewed your portfolio and would like to discuss an opportunity / project.\n\nBest regards,";
  const params = new URLSearchParams({
    subject: subject,
    body: body || defaultBody,
  });
  return `mailto:${email}?${params.toString().replace(/\+/g, '%20')}`;
}

/**
 * Generates a clean tel: URI from a raw phone string
 */
export function createTelLink(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '');
  return `tel:${cleaned}`;
}

/**
 * Normalizes text for search and filtering
 */
export function matchesQuery(targetText: string, query: string): boolean {
  if (!query.trim()) return true;
  return targetText.toLowerCase().includes(query.trim().toLowerCase());
}

/**
 * Filters projects based on search query in title, description, or technologies
 */
export function filterProjects(projects: Project[], query: string): Project[] {
  if (!query.trim()) return projects;
  const q = query.trim().toLowerCase();
  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}

/**
 * Calculates total number of distinct technical skills listed
 */
export function getSkillCount(skillGroups: SkillGroup[]): number {
  return skillGroups.reduce((acc, group) => acc + group.skills.length, 0);
}
