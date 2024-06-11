"use client";

import { cn } from "../../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextReveal = ({ text = "", highlight = "", highlightClass = "text-red-800 font-bold", className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


  const words = text.split(new RegExp(`(${highlight})`, 'gi'));

  console.log("Rendering TextReveal component with text:", text);
  console.log("Split words:", words);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh] bg-[#19345E]", className)}>
      <div
        className={
          "sticky top-0 w-full mx-auto flex h-[50%] max-w-[69rem] items-center bg-transparent px-[0rem] py-[5rem]"
        }
      >
        <p
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/0 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
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
  const opacity = useTransform(progress, range, [0, 1]);

  console.log("Rendering Word component with children:", children);

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5 whitespace-nowrap">
      <span className={"absolute opacity-30"}>{children}</span>
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
