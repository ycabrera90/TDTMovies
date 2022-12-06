// v1.0.4
import { FC } from "react";
import styles from "./InfoFog.module.scss";

export interface IInfoFog {
  className?: string;
  title: string;
  overview: string;
}

const InfoFog: FC<IInfoFog> = ({ className, title, overview }) => {
  return (
    <div className={[styles['bottom-fog'], className ? className : ''].join(' ')}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.overview}>{overview}</p>
    </div>
  );
};

export default InfoFog;
