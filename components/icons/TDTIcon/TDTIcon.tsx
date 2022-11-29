// v1.0.4
import { FC, MouseEventHandler } from "react";
import TDTLogo from "@/public/tdtLogo.svg";
import styles from "./TDTIcon.module.scss";

export interface ITDTIcon {
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const TDTIcon: FC<ITDTIcon> = ({ className, onClick }) => {
  return (
    <i className={[styles.container, className ? className : ''].join(' ')} onClick={onClick}>
      <TDTLogo />
    </i>
  );
};

export default TDTIcon;
