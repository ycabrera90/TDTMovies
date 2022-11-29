// v1.0.4
import { FC } from "react";
import SearchInput from "@/components/inputs/SearchInput/SearchInput";
import styles from "./SearchForm.module.scss";
import SearchButton from "@/components/buttons/SearchButton/SearchButton";

export interface IBaseTemplate {
  className?: string;
}

const SearchForm: FC<IBaseTemplate> = ({ className }) => {
  return (
    <form className={[styles.container, className ? className : ''].join(' ')}>
      <SearchInput />
      <SearchButton />
    </form>
  );
};

export default SearchForm;
