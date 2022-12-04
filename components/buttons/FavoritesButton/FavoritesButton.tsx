import { FC, MouseEventHandler, useEffect, useState } from "react";
import styles from "./FavoritesButton.module.scss";

export interface IFavoritesButton {
  className?: string;
  amount: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

let firstMount: boolean;

const FavoritesButton: FC<IFavoritesButton> = ({ className, amount, onClick }) => {
  const [burstEffect, setBurstEffect] = useState<boolean>(false);

  useEffect(() => {
    firstMount = true;
  }, []);

  useEffect(() => {
    if (firstMount) {
      firstMount = false;
    }
    else{
      setBurstEffect(true);
      setTimeout(() => {
        setBurstEffect(false);
      }, 100)
    }
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
