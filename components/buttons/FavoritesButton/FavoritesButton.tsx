// v1.0.4
import { FC, MouseEventHandler } from "react";
import styles from "./FavoritesButton.module.scss";

export interface IFavoritesButton {
  className?: string;
  amount: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const FavoritesButton: FC<IFavoritesButton> = ({ className, amount, onClick }) => {
  return (
    <button 
      className={[styles.container, className ? className : ''].join(' ')}
      onClick={onClick}
    >
      <span className={styles.text}>Ver Favoritos</span>
      <span className={styles.badge}>{amount}</span>
    </button>
  );
};

export default FavoritesButton;
