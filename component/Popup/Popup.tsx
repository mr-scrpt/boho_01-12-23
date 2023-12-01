import { FC, HTMLAttributes, useEffect } from "react";
import { Button } from "../shared/Button/Button";
import { motion, useAnimation } from "framer-motion";

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  textBenefit: string;
  textBenefit2?: string;
  textAbout: string;
  onSpin: () => void;
  isVisible: boolean;
}

export const Popup: FC<PopupProps> = (props) => {
  const { className, textBenefit, textAbout, isVisible, onSpin } = props;
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [isVisible, controls]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 2 }}
    >
      <div className={className}>
        <div className="flex flex-col gap-6 items-center deco-gradient-border relative">
          <div className="uppercase text-4xl">Congrats!</div>

          <div className="flex flex-col gap-0.5">
            <div className="bold text-gold text-xl">You Have Won:</div>
            <div className="text-xl uppercase">{textBenefit}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-0.5 relative">
            <Button text="Spin Again" onClick={() => onSpin()}></Button>
            <div className="text-s text-green font-normal">{textAbout}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
