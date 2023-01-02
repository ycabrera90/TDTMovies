import { FC, MouseEventHandler } from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styles from "./AddRemButton.module.scss";

export interface IAddRemButton {
  className?: string;
  onClick?: (type: "add" | "remove" ) => void;
  type: "add" | "remove";
}

const AddRemButton: FC<IAddRemButton> = ({ className, onClick, type }) => {

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (onClick) {
      onClick(type);
    }
  }

  return (
    <>
      {type === 'remove' && (
        <MinusCircleOutlined
          className={[styles.icon, className ? className : ''].join(' ')}
          onClick={onClickHandler}
          data-testid="remove-button"
        />
      )}
      {type === 'add' && (
        <PlusCircleOutlined
          className={[styles.icon, className ? className : ''].join(' ')}
          onClick={onClickHandler}
          data-testid="add-button"
        />
      )}
    </>
  );
};

export default AddRemButton;
