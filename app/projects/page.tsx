import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  // Separate projects by category
  const visualNarrativeProjects = projects.filter(
    (project) => project.category === "Visual & Narrative"
  );
  const systemsEngineeringProjects = projects.filter(
    (project) => project.category === "Systems & Engineering"
  );
  const researchProjects = projects.filter(
    (project) => project.category === "Research"
  );

  return (
    <div className="min-h-screen bg-[#1a1625] text-[#e5e5e5] pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 style={{ fontFamily: "var(--font-space-grotesk)" }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e5e5e5] mb-12 md:mb-20 tracking-wide">
          Projects
        </h1>

        {/* Visual & Narrative Section */}
        <section className="mb-16 md:mb-20">
          <h2 style={{ fontFamily: "var(--font-space-grotesk)" }} className="text-3xl sm:text-4xl font-bold text-[#e5e5e5] mb-6 md:mb-10">
            Visual & Narrative
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {visualNarrativeProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                description={project.tagline}
                imageUrl={project.heroImage || (project.heroVideo ? project.heroVideo : "")}
              />
            ))}
          </div>
        </section>

        {/* Systems & Engineering Section */}
        <section className="mb-16 md:mb-20">
          <h2 style={{ fontFamily: "var(--font-space-grotesk)" }} className="text-3xl sm:text-4xl font-bold text-[#e5e5e5] mb-6 md:mb-10">
            Systems & Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {systemsEngineeringProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                description={project.tagline}
                imageUrl={project.heroImage || (project.heroVideo ? project.heroVideo : "")}
              />
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)" }} className="text-3xl sm:text-4xl font-bold text-[#e5e5e5] mb-6 md:mb-10">
            Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {researchProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                description={project.tagline}
                imageUrl={project.heroImage || (project.heroVideo ? project.heroVideo : "")}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
