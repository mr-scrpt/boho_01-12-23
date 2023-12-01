import Image from "next/image";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import imgCursor from "/public/img/wheel_cursor.svg";
import imgWheel from "/public/img/wheel.png";
import { Button } from "../shared/Button/Button";
import { twMerge } from "tailwind-merge";

interface WheelProps extends HTMLAttributes<HTMLDivElement> {
  onSpin: () => void;
  isSpin: boolean;
  countStart: number;
}

export const Wheel: FC<WheelProps> = (props) => {
  const { className, isSpin, onSpin, countStart } = props;
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (isSpin) {
      setStart(true);
    }
    // if(countStart == 1){
    //
    // }
  }, [isSpin]);

  const wheelClass = twMerge(
    start ? "animate-spin-slow" : "",
    countStart === 2 ? "animate-spin-slow-second" : "",
    "flex justify-center w-full relative deco-gradient-spot ease-in-out",
  );
  return (
    <div className={className}>
      <div className="flex relative mb-12">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Image
            src={imgCursor}
            alt="cursor"
            className="w-8 md:w-16"
            width={800}
            height={800}
          />
        </div>
        <div className={wheelClass}>
          <Image
            src={imgWheel}
            alt="cursor"
            className="w-[300px] md:w-[320px] lg:w-[480px] relative"
          />
        </div>
        <div className="flex absolute -bottom-12 left-1/2 transform -translate-x-1/2 ">
          <Button text="Spin" className="" onClick={() => onSpin()} />
        </div>
      </div>
    </div>
  );
};
