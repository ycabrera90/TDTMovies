// v1.0.4
import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import tdtLogo from "@/public/tdtLogo.png";
import styles from "./TDTIcon.module.scss";

export interface ITDTIcon {
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const TDTIcon: FC<ITDTIcon> = ({ className, onClick }) => {
  return (
    <div
      className={[styles.container, className ? className : ''].join(' ')}
      data-testid="TDTIcon"
    >
      <Image
        onClick={onClick}
        alt="TDT Logo"
        src={tdtLogo}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px)  100vw,                
                 (max-width: 1200px)  50vw,
                                      33vw"
      />
    </div>
  );
};

export default TDTIcon;
