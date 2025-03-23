"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  // Adjust threshold to 0.5 (50% of the element must be visible)
  const isInView = useInView(ref, { once: true, threshold: 0.1, margin: "0px 0px -250px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;