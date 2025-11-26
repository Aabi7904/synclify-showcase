import { useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

export const useParallax = (ref: RefObject<HTMLElement>, distance: number = 200) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
  
  return y;
};
