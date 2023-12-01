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
      <div className="flex relative mb-12">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Image src={imgCursor} alt="cursor" className="w-8" />
        </div>
        <div className="flex justify-center w-full">
          <Image src={imgWheel} alt="cursor" className="w-[300px]" />
        </div>
        <div className="flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 ">
          <Button text="Spin" className="" />
        </div>
      </div>
    </div>
  );
};
