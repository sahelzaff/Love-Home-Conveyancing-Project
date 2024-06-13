"use client";

import { cn } from "../../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { assets } from "../../assets/assets.js";

const TextReveal = ({ text = "", highlight = "", highlightClass = "text-red-800 font-bold", className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(new RegExp(`(${highlight})`, 'gi'));

  console.log("Rendering TextReveal component with text:", text);
  console.log("Split words:", words);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={assets.video}
        autoPlay
        loop
        muted
      />
      <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-transparent">
        <p
          className="flex flex-wrap p-5 text-3xl font-bold text-black/0 dark:text-white/20 md:p-8 md:text-4xl lg:p-10 lg:text-5xl xl:text-6xl"
        >
          {words.map((word, i) => {
            const isHighlight = word.toLowerCase() === highlight.toLowerCase();
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]} highlight={isHighlight} highlightClass={highlightClass}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range, highlight, highlightClass }) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: false });

  console.log("Rendering Word component with children:", children);

  return (
    <span className="relative mx-1 lg:mx-2.5 whitespace-nowrap">
      <motion.span
        style={{ opacity: opacity }}
        className={highlight ? highlightClass : "font-outfit text-white dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
