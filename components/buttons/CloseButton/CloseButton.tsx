import { FC, MouseEventHandler } from "react";
import { CloseOutlined } from '@ant-design/icons';
import styles from "./CloseButton.module.scss";

export interface ICloseButton {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: FC<ICloseButton> = ({ className, onClick }) => {
  return (
    <CloseOutlined
      className={[styles.icon, className ? className : ''].join(' ')}
      onClick={onClick}
    />
  );
};

export default CloseButton;
