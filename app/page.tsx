"use client";

import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import { motion } from "framer-motion";

export default function Home() {
  // Featured projects: World in a Jar, Between Two Worlds, Ray Tracer
  const featuredProjectSlugs = ["world-in-a-jar", "between-two-worlds", "ray-tracer"];
  const featuredProjects = projects.filter((project) =>
    featuredProjectSlugs.includes(project.slug)
  );

  return (
    <div className="min-h-screen bg-[#1a1625] text-[#e5e5e5] pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <section className="mb-12 md:mb-16">
          <div className="max-w-5xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-3 md:space-y-4 mb-8 md:mb-12"
            >
              <h1
                style={{ fontFamily: "var(--font-space-grotesk)" }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e5e5e5] tracking-wide leading-tight px-4"
              >
                Hadil Owda
              </h1>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-lg sm:text-xl md:text-2xl text-[#94a3b8] font-light leading-relaxed max-w-3xl mx-auto px-4"
              >
                Building at the intersection of code and creativity
              </p>
            </motion.div>
          </div>
        </section>

        {/* Demo Reel Section */}
        <section className="mb-24 md:mb-32 lg:mb-48">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-16"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-[#14b8a6]">✨</span>
              <h2
                style={{ 
                  fontFamily: "var(--font-fredoka)",
                  textShadow: "4px 4px 0px rgba(20,184,166,0.3), 2px 2px 0px rgba(148,163,184,0.2)"
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#e5e5e5]"
              >
                DEMO REEL
              </h2>
              <span className="text-xl sm:text-2xl md:text-3xl text-[#14b8a6]">✨</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-full max-w-[900px] mx-auto aspect-video rounded-lg overflow-hidden shadow-[0_0_30px_rgba(20,184,166,0.2)]"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/to4qxyxufh4"
                title="Demo Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 md:mb-16 px-4"
          >
            <h2 style={{ fontFamily: "var(--font-space-grotesk)" }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e5e5e5] tracking-wide">
              Featured Work
            </h2>
            <Link
              href="/projects"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-base sm:text-lg md:text-xl hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)] min-h-[44px] flex items-center"
            >
              View All Projects →
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
              >
                <ProjectCard
                  slug={project.slug}
                  name={project.name}
                  description={project.tagline}
                  imageUrl={project.heroImage || (project.heroVideo ? project.heroVideo : "")}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
