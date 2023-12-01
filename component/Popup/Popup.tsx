import { FC, HTMLAttributes } from "react";

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  textBenefit: string;
  textAbout: string;
}

export const Popup: FC<PopupProps> = (props) => {
  const { className, textBenefit, textAbout } = props;
  return (
    <div className={className}>
      <div className="flex flex-col deco-gradient-border relative">
        <div className="uppercase">Congrats!</div>
      </div>
    </div>
  );
};
