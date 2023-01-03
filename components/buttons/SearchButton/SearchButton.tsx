import { FC, MouseEventHandler } from "react";
import {SearchOutlined} from "@ant-design/icons";
import styles from "./SearchButton.module.scss";

export interface ISearchButton {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SearchButton: FC<ISearchButton> = ({ className, onClick }) => {
  return (
    <SearchOutlined
      className={[styles.container, className ? className : ''].join(' ')}
      onClick={onClick}
      data-testid="SearchButton"
    />
  );
};

export default SearchButton;
