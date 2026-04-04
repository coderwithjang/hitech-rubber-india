"use client";

import { useRef, useEffect } from "react";

export default function VideoPlayer({ src, maxDuration = 60 }: { src: string, maxDuration?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Loop back to the start if we exceed max duration
      if (video.currentTime >= maxDuration) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [maxDuration]);

  return (
    <video 
      ref={videoRef}
      src={`${src}#t=0,${maxDuration}`}
      autoPlay 
      loop 
      muted 
      playsInline 
      controls
      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
    />
  );
}
