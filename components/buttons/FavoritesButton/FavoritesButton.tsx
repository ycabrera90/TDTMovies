import { FC, MouseEventHandler, useEffect, useState } from "react";
import styles from "./FavoritesButton.module.scss";

export interface IFavoritesButton {
  className?: string;
  amount: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const FavoritesButton: FC<IFavoritesButton> = ({ className, amount, onClick }) => {
  const [burstEffect, setBurstEffect] = useState<boolean>(false);

  useEffect(() => {
      setBurstEffect(true);
      setTimeout(() => {
        setBurstEffect(false);
      }, 100);
  }, [amount]);
  
  return (
    <button 
      className={[styles.container, className ? className : '', burstEffect ? styles.burst: ''].join(' ')}
      onClick={onClick}
    >
      <span className={styles.text}>Ver Favoritos</span>
      <span className={styles.badge}>{amount}</span>
    </button>
  );
};

export default FavoritesButton;
