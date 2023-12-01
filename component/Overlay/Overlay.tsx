import { FC, HTMLAttributes } from "react";

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {}

export const Overlay: FC<OverlayProps> = (props) => {
  const { className, children } = props;
  return (
    <div className="absolute w-full h-full z-20 backdrop-blur-md bg-black/50">
      <div className="flex w-full h-full items-center justify-center absolute z-30">
        {children}
      </div>
    </div>
  );
};
