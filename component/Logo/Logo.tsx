import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import logoImg from "/public/img/logo.svg";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export const Logo: FC<LogoProps> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Image src={logoImg} alt="Logo BOHO" />
    </div>
  );
};
