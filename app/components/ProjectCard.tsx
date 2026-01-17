"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface ProjectCardProps {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
}

const isVideoUrl = (url: string): boolean => {
  return /\.(mov|mp4|webm|ogg)$/i.test(url);
};

export default function ProjectCard({
  slug,
  name,
  description,
  imageUrl,
}: ProjectCardProps) {
  const isVideo = isVideoUrl(imageUrl);

  useEffect(() => {
    if (!imageUrl) {
      console.error(`[ProjectCard] Missing imageUrl for project: ${name}`);
      return;
    }
    
    // Log image path for debugging
    if (!isVideo) {
      console.log(`[ProjectCard] Loading image for ${name}: ${imageUrl}`);
    }
  }, [imageUrl, name, isVideo]);

  const isWorldInAJar = slug === "world-in-a-jar";
  const isFiona = slug === "fiona-and-the-left-paw-power";
  const needsContain = isWorldInAJar || isFiona;
  const backgroundColor = isWorldInAJar ? "#000000" : isFiona ? "#6B46C1" : "transparent"; // Purple background for Fiona

  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer group"
        style={{ backgroundColor }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {isVideo ? (
          <video
            src={imageUrl}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
            muted
            loop
            playsInline
            autoPlay
            aria-label={`${name} preview`}
            onError={(e) => {
              console.error(`[ProjectCard] Video load error for ${name}:`, imageUrl, e);
            }}
          />
        ) : (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className={needsContain ? "object-contain" : "object-cover"}
            style={{ objectPosition: needsContain ? "center" : "center top" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            onError={(e) => {
              console.error(`[ProjectCard] Image load error for ${name}:`, imageUrl, e);
            }}
          />
        )}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#e5e5e5] mb-3 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
            {name}
          </h3>
          <p className="text-[#e5e5e5]/90 text-base md:text-lg">{description}</p>
        </motion.div>
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none"
          whileHover={{
            borderColor: "rgba(59,130,246,0.6)",
            boxShadow: "0 0 20px rgba(59,130,246,0.4)",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </Link>
  );
}
