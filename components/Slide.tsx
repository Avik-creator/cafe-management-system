"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
};

export default function Slide({
  children,
  delay,
  className,
  index = 1,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 },
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      viewport={{ once: true }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
