import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import imgCursor from "/public/img/wheel_cursor.svg";
import imgWheel from "/public/img/wheel.png";
import { Button } from "../shared/Button/Button";

interface WheelProps extends HTMLAttributes<HTMLDivElement> {}

export const Wheel: FC<WheelProps> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="flex relative">
        <div className="absolute">
          <Image src={imgCursor} alt="cursor" />
        </div>
        <div className="flex">
          <Image src={imgWheel} alt="cursor" />
        </div>
        <div className="flex absolute">
          <Button text="Spin" />
        </div>
      </div>
    </div>
  );
};
