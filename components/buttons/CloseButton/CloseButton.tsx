// v1.0.4
import { FC, MouseEventHandler } from "react";
import XSVG from "@/public/x_image.svg";
import styles from "./CloseButton.module.scss";

export interface ICloseButton {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: FC<ICloseButton> = ({ className, onClick }) => {
  return (
    <button className={[styles.container, className ? className : ''].join(' ')} onClick={onClick} >
      <XSVG/>
    </button>
  );
};

export default CloseButton;
