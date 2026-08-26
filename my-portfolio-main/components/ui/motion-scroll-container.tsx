"use client";

import React, { useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  type MotionValue,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const left = "0%";
const right = "100%";
const leftInset = "10%";
const rightInset = "90%";
const transparent = "#0000";
const opaque = "#000";

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value <= 0.02) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value >= 0.98) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

export type PublicationItem = {
  id: string | number;
  title: string;
  badge: string;
  desc: string;
  video: string;
  href: string;
  github?: string;
  demo?: string;
};

export function PublicationsScrollContainer({
  publications,
}: {
  publications: PublicationItem[];
}) {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div className="relative w-full">
      {/* Top Header Controls / Progress Indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Circular Progress Indicator */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 100 100" className="transform -rotate-90">
              <circle cx="50" cy="50" r="36" pathLength="1" className="stroke-white/10 fill-none stroke-[6]" />
              <motion.circle
                cx="50"
                cy="50"
                r="36"
                className="stroke-cyan-400 fill-none stroke-[6]"
                style={{ pathLength: scrollXProgress }}
              />
            </svg>
          </div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Scroll Research & Patents →
          </span>
        </div>
      </div>

      {/* Horizontal Scroll Mask Container */}
      <motion.ul
        ref={ref}
        style={{ maskImage }}
        className="flex gap-8 overflow-x-auto py-4 scrollbar-none snap-x snap-mandatory"
      >
        {publications.map((pub) => (
          <li
            key={pub.id}
            className="snap-center shrink-0 w-[340px] md:w-[480px] bg-[#12161F] border border-white/10 rounded-3xl overflow-hidden flex flex-col group hover:border-cyan-500/50 transition-all duration-500 shadow-2xl min-h-[480px]"
          >
            {/* Video Header */}
            <div className="relative h-60 w-full overflow-hidden border-b border-white/10 bg-black/40">
              <video
                src={pub.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="outline"
                  className="bg-cyan-500/20 text-cyan-300 border-cyan-400/40 text-xs px-3 py-1 font-bold backdrop-blur-md"
                >
                  {pub.badge}
                </Badge>
              </div>
            </div>

            {/* Publication Details */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                  {pub.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  {pub.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-3">
                {pub.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-white/10 hover:bg-white/10 text-white gap-2"
                  >
                    <a href={pub.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                )}
                {pub.demo && (
                  <Button
                    size="sm"
                    asChild
                    className="bg-cyan-600 hover:bg-cyan-500 text-white gap-2 font-medium"
                  >
                    <a href={pub.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold gap-2"
                >
                  <a href={pub.href}>
                    Inquire <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default PublicationsScrollContainer;
