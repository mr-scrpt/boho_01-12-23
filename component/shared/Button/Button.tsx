import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, text } = props;
  const classLine = twMerge(className, "deco-gradient px-24 py-4 rounded-full");
  return (
    <button type="button" className={classLine}>
      <span className="text-2xl md:text-4xl uppercase">{text}</span>
    </button>
  );
};
