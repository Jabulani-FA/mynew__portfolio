import { UNSAFE_deserializeErrors } from "react-router";

export const divAnimation = ({ direction, type, delay, duration }) => ({
  initial: {
    x: direction==="right"?"-100%":direction==="left"?"100%":0,
    y: direction==="down"?"-100%":direction==="up"?"100%":0,
    opacity: 0,
  },
  animate: {
    x: direction==="right"|| direction==="left"&& 0,
    y: direction==="down"|| direction==="up"&& 0,
    opacity: 1,
    transition: {
      type: type!==""?type:"spring",
      stiffness: 100,
      damping: 30,
      delay: delay,
      duration: duration,
    }
  },
  exit: {
    x: direction==="right"?"-100%":direction==="left"?"100%":0,
    opacity: 0,
    y: direction==="down"?"-100%":direction==="up"?"100%":0,
  }
});
export const rightAnimation = (delay) => ({
  initial: {
    x: 0,
    opacity: 0,
  },
  visible: {
    x: 100,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: delay,
      duration: 0.6 + delay,
    },
  },
  exit: {
    x: 0,
    opacity: 0,
  },
});

export const leftSlideVariant = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
  },
};
export const rightSlideVariant = {
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
  },
};
