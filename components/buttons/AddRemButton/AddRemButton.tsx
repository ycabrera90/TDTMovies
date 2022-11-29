import { FC, MouseEventHandler } from "react";
import styles from "./AddRemButton.module.scss";

export interface IAddRemButton {
  className?: string;
  amount?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "add" | "remove";
}

const AddRemButton: FC<IAddRemButton> = ({ className, amount, onClick, type }) => {

  return (
    <button className={[styles.container, className ? className : ''].join(' ')}
    onClick={onClick}
    >
      <span className={`${styles.piece1} ${styles[type]}`}/>
      <span className={`${styles.piece2} ${styles[type]}`}/>
    </button>
  );
};
export default AddRemButton;
