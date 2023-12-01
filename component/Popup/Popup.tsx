import { FC, HTMLAttributes } from "react";
import { Button } from "../shared/Button/Button";

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  textBenefit: string;
  textBenefit2?: string;
  textAbout: string;
  onSpin: () => void;
}

export const Popup: FC<PopupProps> = (props) => {
  const { className, textBenefit, textBenefit2, textAbout, onSpin } = props;

  return (
    <div className={className}>
      <div className="flex flex-col gap-6 items-center deco-gradient-border relative">
        <div className="uppercase text-4xl">Congrats!</div>

        <div className="flex flex-col gap-0.5 items-center text-center">
          <div className="bold text-gold text-xl">You Have Won:</div>
          <div className="text-xl uppercase">{textBenefit}</div>
          <div className="text-xl uppercase">{textBenefit2}</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-0.5 relative">
          <Button text="Spin Again" onClick={() => onSpin()}></Button>
          <div className="text-s text-green font-normal text-center">
            {textAbout}
          </div>
        </div>
      </div>
    </div>
  );
};
