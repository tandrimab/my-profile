"use client";
import { typewriterAnimation } from "@/app/utils/motions";
import { motion } from "framer-motion";

function TypewritingText({ text, textColor, delay }) {
  let animatedTyping = typewriterAnimation(delay);
  // animatedTyping = {...animatedTyping, otherVariants}

  return (
    <motion.span
      className={textColor ? textColor : "bg-gradient_text text-gradient"}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      aria-hidden
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={animatedTyping}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default TypewritingText;
