"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageSequenceViewerProps {
    folderName: string;
    frameCount: number;
    className?: string;
}

export default function ImageSequenceViewer({ folderName, frameCount, className }: ImageSequenceViewerProps) {
    const [frameIndex, setFrameIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev % frameCount) + 1);
        }, 50);

        return () => clearInterval(interval);
    }, [frameCount]);

    const paddedIndex = frameIndex.toString().padStart(3, "0");
    const imageSrc = `/${folderName}/ezgif-frame-${paddedIndex}.jpg`;

    return (
        <div
            className={cn("w-full h-48 bg-gray-900 rounded-t-xl overflow-hidden relative", className)}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imageSrc}
                alt="Project Preview"
                className="object-cover w-full h-full transition-opacity duration-300"
                onError={(e) => {
                    // Fallback if image doesn't exist yet
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect width="100%" height="100%" fill="%23111"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23333" font-family="sans-serif" font-size="24">Image Seq</text></svg>';
                }}
            />
        </div>
    );
}