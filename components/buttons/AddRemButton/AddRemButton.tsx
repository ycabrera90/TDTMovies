import { FC, MouseEventHandler } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styles from "./AddRemButton.module.scss";

export interface IAddRemButton {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "add" | "remove";
}

const AddRemButton: FC<IAddRemButton> = ({ className, onClick, type }) => {

  return (
    <>
      {type === 'remove' && (
        <MinusCircleOutlined
          className={[styles.icon, className ? className : ''].join(' ')}
          onClick={onClick}
        />
      )}
      {type === 'add' && (
        <PlusCircleOutlined
          className={[styles.icon, className ? className : ''].join(' ')}
          onClick={onClick}
        />
      )}
    </>
  );
};
export default AddRemButton;
