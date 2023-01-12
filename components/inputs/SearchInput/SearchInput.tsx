import { ChangeEventHandler, FC } from "react";
import styles from "./SearchInput.module.scss";

export interface ISearchInput {
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<ISearchInput> = ({ className, value, onChange }) => {
  return (
    <input
      className={[styles.container, className ? className : ""].join(" ")}
      placeholder="Buscar.."
      value={value}
      onChange={onChange}
      data-testid="SearchInput"
    />
  );
};

export default SearchInput;
