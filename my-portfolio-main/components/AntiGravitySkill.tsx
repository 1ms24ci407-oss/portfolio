"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AntiGravitySkill({ name }: { name: string }) {
    const [randomY, setRandomY] = useState(10);
    const [randomDuration, setRandomDuration] = useState(4);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const [delay, setDelay] = useState(0);

    useEffect(() => {
        setRandomDuration(Math.random() * 2 + 4); // 4 to 6 seconds
        setDelay(Math.random() * 2); // 0 to 2 seconds delay
        setRotateX(Math.random() * 20 - 10);
        setRotateY(Math.random() * 20 - 10);
    }, []);

    return (
        <motion.div
            className="relative flex items-center justify-center px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-shadow"
            whileHover={{
                y: -10,
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            animate={{
                y: [-10, 10, -10],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            style={{ perspective: 1000 }}
        >
            <span className="text-cyan-400 font-semibold tracking-wide">
                {name}
            </span>
        </motion.div>
    );
}