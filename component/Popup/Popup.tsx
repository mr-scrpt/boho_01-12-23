import { FC, HTMLAttributes } from "react";
import { Button } from "../shared/Button/Button";

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  textBenefit: string;
  textBenefit2?: string;
  textAbout: string;
}

export const Popup: FC<PopupProps> = (props) => {
  const { className, textBenefit, textAbout } = props;
  return (
    <div className={className}>
      <div className="flex flex-col gap-6 items-center deco-gradient-border relative">
        <div className="uppercase text-4xl">Congrats!</div>

        <div className="flex flex-col gap-0.5">
          <div className="bold text-gold text-xl">You Have Won:</div>
          <div className="text-xl uppercase">{textBenefit}</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-0.5">
          <Button text="Spin Again"></Button>
          <div className="text-s text-green font-normal">{textAbout}</div>
        </div>
      </div>
    </div>
  );
};
