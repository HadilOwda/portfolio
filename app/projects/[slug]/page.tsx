"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { getProjectBySlug } from "../../data/projects";
import VideoPlayer from "../../components/VideoPlayer";
import ImageLightbox from "../../components/ImageLightbox";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  if (!project) {
    notFound();
  }

  const isBigGame = slug === "bare-metal-graphics-pipeline";
  const isResearchProject = project.category === "Research";
  const isFPGA = slug === "fpga-music-synthesizer";
  const isWorldInJar = slug === "world-in-a-jar";

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url.split(/[=/]/).pop()?.split('?')[0] || '';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] pt-16">
      {/* Hero Image or Video */}
      <div className={`w-full h-[60vh] md:h-[70vh] relative ${isWorldInJar ? "bg-[#000000]" : "bg-[#0a0a0a]"} flex items-center justify-center`}>
        {project.heroVideo ? (
          <VideoPlayer
            src={project.heroVideo}
            alt={`${project.name} hero video`}
            className="h-full aspect-video"
            muted={true}
            controls={true}
            autoplay={false}
          />
        ) : project.heroImage ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={project.heroImage}
              alt={project.name}
              fill
              className={isBigGame || isResearchProject || isFPGA || isWorldInJar ? "object-contain" : "object-contain md:object-cover"}
              priority
              sizes="100vw"
            />
          </div>
        ) : null}
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* YouTube Video Embed */}
        {project.youtubeUrl && (
          <div className="mb-12 md:mb-16 flex justify-center">
            <div className="w-full max-w-[900px] aspect-video rounded-lg overflow-hidden border border-gray-800/50">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.youtubeUrl)}`}
                title={`${project.name} - YouTube video player`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
        {/* Category Tag */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[#3b82f6]/20 border border-[#3b82f6]/40 text-[#3b82f6] rounded-full text-sm md:text-base font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            {project.category}
          </span>
        </div>

        {/* Title and Tagline */}
        <div className="mb-10">
          <h1 className="text-6xl font-bold text-[#e5e5e5] mb-6 tracking-wide" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            {project.name}
          </h1>
          <p className="text-xl md:text-2xl text-[#94a3b8] font-light leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {project.tagline}
          </p>
        </div>

        {/* Role */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-[#e5e5e5] mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Role</h3>
          <p className="text-base md:text-lg text-[#e5e5e5]/80 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>{project.role}</p>
          {project.status && (
            <p className="text-base md:text-lg text-[#3b82f6] mt-2 italic" style={{ fontFamily: 'var(--font-dm-sans)' }}>{project.status}</p>
          )}
        </div>

        {/* GitHub Link */}
        {project.github && (
          <div className="mb-10">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#14b8a6] hover:text-[#5eead4] underline underline-offset-4 transition-all duration-200 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </Link>
          </div>
        )}

        {/* PDF Link */}
        {project.pdf && (
          <div className="mb-10">
            <Link
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#14b8a6] hover:text-[#5eead4] underline underline-offset-4 transition-all duration-200 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              {isWorldInJar ? "View Full Project Report (PDF)" : "View PDF Book"}
            </Link>
          </div>
        )}

        {/* Main Description */}
        <div className="mb-14 md:mb-18">
          <p className="text-base md:text-lg text-[#e5e5e5]/80 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <section className="mb-14 md:mb-18">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-8" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-[#3b82f6]/20 border border-[#3b82f6]/40 text-[#3b82f6] rounded-full text-base md:text-lg font-medium hover:bg-[#3b82f6]/30 hover:border-[#3b82f6]/60 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] transition-all duration-200"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {project.galleryItems.length > 0 && (
          <section className="mb-14 md:mb-18">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-8" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.galleryItems.map((item, index) => {
                const isWorldInJarImage = isWorldInJar && item.type === "image";
                
                return (
                  <div
                    key={index}
                    className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-800/50 hover:border-[#3b82f6]/40 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-all duration-200"
                  >
                    {item.type === "image" ? (
                      <div
                        className={`relative w-full h-full cursor-pointer overflow-hidden group ${
                          isWorldInJarImage ? "bg-[#000000]" : ""
                        }`}
                        onClick={() =>
                          setLightboxImage({
                            src: item.src,
                            alt: item.alt || `${project.name} gallery image ${index + 1}`,
                          })
                        }
                      >
                        <Image
                          src={item.src}
                          alt={item.alt || `${project.name} gallery image ${index + 1}`}
                          fill
                          className={`transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110 ${
                            isWorldInJarImage ? "object-contain" : "object-cover"
                          }`}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : item.type === "video" ? (
                    <VideoPlayer
                      src={item.src}
                      alt={item.alt || `${project.name} gallery video ${index + 1}`}
                      className="h-full"
                      muted={true}
                      controls={true}
                      autoplay={isWorldInJar && index === 0}
                      loop={isWorldInJar && index === 0}
                      noAudio={isBigGame} // Completely remove audio capability for Big Game videos
                    />
                  ) : item.type === "pdf" ? (
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full flex flex-col items-center justify-center bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-200"
                    >
                      <div className="flex flex-col items-center justify-center p-6">
                        <svg
                          className="w-16 h-16 mb-4 text-[#14b8a6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-white text-sm md:text-base font-medium text-center mb-2">
                          {item.alt || "View PDF"}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm text-center">
                          Click to open
                        </p>
                      </div>
                    </a>
                  ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Image Lightbox */}
        {lightboxImage && (
          <ImageLightbox
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            isOpen={!!lightboxImage}
            onClose={() => setLightboxImage(null)}
          />
        )}

        {/* Back to Projects Link */}
        <div className="pt-8 border-t border-gray-800/50">
          <Link
            href="/projects"
            className="inline-flex items-center text-[#e5e5e5]/80 hover:text-[#14b8a6] transition-all duration-200 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
