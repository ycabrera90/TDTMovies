// v1.0.4
import { FC } from "react";
import styles from "./InfoData.module.scss";

export interface IInfoData {
  className?: string;
  tag: string;
  value: string | number;
  unit?: string;
}

const InfoData: FC<IInfoData> = ({ className, tag, value, unit }) => {

  let formattedValue;
  if(typeof value === 'number') {
    formattedValue = new Intl.NumberFormat("es-ES").format(value);
  } else {
    formattedValue = value;
  }

  return (
    <div className={[styles.container, className ? className : ''].join(' ')}>
      <label>{`${tag}:`}</label>
      <span>{`${formattedValue} ${unit ? unit : ''}`}</span>
    </div>
  );
};

export default InfoData;
