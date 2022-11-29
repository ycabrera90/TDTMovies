import { FC, MouseEventHandler } from "react";
import SearchSVG from "@/assets/images/search.svg";
import styles from "./SearchButton.module.scss";

export interface ISearchButton {
  className?: string;
  amount?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SearchButton: FC<ISearchButton> = ({ className, amount, onClick }) => {
  return (
    <button className={[styles.container, className ? className : ''].join(' ')}
    onClick={onClick}
    >
      <SearchSVG/>
    </button>
  );
};
export default SearchButton;
