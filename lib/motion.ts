import type { Transition } from "framer-motion";

/**
 * When prefers-reduced-motion is on, zero-duration transitions disable entrance motion.
 */
export function getTransition(
  reduceMotion: boolean | null,
  t: Transition = {}
): Transition {
  if (reduceMotion) {
    return { duration: 0 };
  }
  return t;
}

export function getVariants(reduceMotion: boolean | null) {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1, y: 0, x: 0 },
      visible: { opacity: 1, y: 0, x: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
}