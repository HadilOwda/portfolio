"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  alt?: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  noAudio?: boolean; // New prop for completely silent videos
}

export default function VideoPlayer({
  src,
  alt,
  className = "",
  autoplay = false,
  loop = false,
  muted = true,
  controls = true,
  noAudio = false, // For Big Game videos that should never have audio
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !noAudio) return;

    // Force volume to 0 and keep it there
    video.volume = 0;
    video.muted = true;

    // Prevent volume changes
    const preventVolumeChange = () => {
      video.volume = 0;
      video.muted = true;
    };

    // Listen for volume changes and reset
    video.addEventListener("volumechange", preventVolumeChange);
    video.addEventListener("loadedmetadata", () => {
      video.volume = 0;
      video.muted = true;
    });

    return () => {
      video.removeEventListener("volumechange", preventVolumeChange);
    };
  }, [noAudio]);

  return (
    <div className={`relative w-full max-w-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        controls={controls}
        className={`w-full h-full max-w-full rounded-lg ${noAudio ? "video-no-audio-controls" : ""}`}
        autoPlay={autoplay}
        loop={loop}
        muted={muted || noAudio}
        playsInline
        aria-label={alt || "Video player"}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
