import { UNSAFE_deserializeErrors } from "react-router";

export default function divAnimation({ direction, type, delay, duration }) {
  initial: {
    x: direction==="right"?"-100%":direction==="left"?"100%":0;
    y: direction==="down"?"-100%":direction==="up"?"100%":0;
    opacity: 0;
  }
  animate: {
    x: direction==="right"|| direction==="left"&& 0;
    y: direction==="down"|| direction==="up"&& 0;
    opacity: 1;
    transition: {
      type: type!==""?type:"spring";
      stiffness: 100;
      damping: 30;
      delay: delay;
      duration: duration;
    }
  }
  exit: {
    x: direction==="right"?"-100%":direction==="left"?"100%":0;
    opacity: 0;
    y: direction==="down"?"-100%":direction==="up"?"100%":0;
  }
}
