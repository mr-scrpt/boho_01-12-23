import { FC, HTMLAttributes } from "react";
import { Logo } from "../Logo/Logo";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {}

export const Banner: FC<BannerProps> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <Logo className="max-w-[130px] sm:max-w-[200px] md:max-w-[320px]" />
          <div className="text-4xl sm:text-3xl xl:text-8xl text-center uppercase">
            try to get up to a$3000
          </div>
          <div className="text-2xl xl:text-4xl text-center uppercase">
            +225 free spins
          </div>
        </div>
      </div>
    </div>
  );
};
