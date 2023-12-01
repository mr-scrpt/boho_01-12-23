import { FC, HTMLAttributes } from "react";

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  textBenefit: string;
}

export const Popup: FC<PopupProps> = (props) => {
  return <div>Popup</div>;
};
