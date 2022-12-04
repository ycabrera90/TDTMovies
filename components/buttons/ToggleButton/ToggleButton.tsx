import React, { FC, MouseEventHandler } from "react";
import styles from "./ToggleButton.module.scss";

export interface IToggleButton {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  clicked: boolean;
};

const ToggleButton: FC<IToggleButton> = ({ className, clicked, onClick }) => {

  return (
    <button
    
      className={[
        styles['toggle-button'],
        className ? className : '',
        clicked ? styles['expanded'] : '',
      ].join(' ')}

      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleButton;
