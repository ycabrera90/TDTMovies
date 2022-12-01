import { FC, MouseEventHandler } from "react";
import SearchSVG from "@/public/search.svg";
import styles from "./SearchButton.module.scss";

export interface ISearchButton {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SearchButton: FC<ISearchButton> = ({ className, onClick }) => {
  return (
    <button className={[styles.container, className ? className : ''].join(' ')}
    onClick={onClick}
    >
      <SearchSVG/>
    </button>
  );
};
export default SearchButton;
