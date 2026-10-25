import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = PropsWithChildren<{
  delay?: number;
  y?: number;
  className?: string;
}>;

// Fades and slides its children in the first time they scroll into view.
function Reveal({ children, delay = 0, y = 28, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
