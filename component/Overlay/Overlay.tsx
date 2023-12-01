import { FC, HTMLAttributes, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
}

export const Overlay: FC<OverlayProps> = (props) => {
  const { className, children, isVisible } = props;
  const controls = useAnimation();
  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [isVisible, controls]);
  return (
    <div className="absolute w-full h-full z-20 backdrop-blur-md bg-black/50">
      <div className="flex w-full h-full items-center justify-center absolute z-30">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          exit={{ opacity: 0, y: 100 }}
          animate={controls}
          // transition={{ duration: 0.5 }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
