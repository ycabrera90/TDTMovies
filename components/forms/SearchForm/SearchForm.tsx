// v1.0.4
import { BaseSyntheticEvent, FC, useState } from "react";
import SearchInput from "@/components/inputs/SearchInput/SearchInput";
import styles from "./SearchForm.module.scss";
import SearchButton from "@/components/buttons/SearchButton/SearchButton";
import { useRouter } from "next/router";

export interface IBaseTemplate {
  className?: string;
}

const SearchForm: FC<IBaseTemplate> = ({ className }) => {
  const [queryText, setQueryText] = useState<string>('');
  const router = useRouter();


  const onChangeInputHandler = (ev: BaseSyntheticEvent) => {
    setQueryText(ev.target.value);
  }

  const submitHandler = (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    if (queryText) {
      router.push(`/home/${encodeURIComponent(queryText.trim())}`);
    } else {
      router.push(`/home`);
    }
  }

  return (
    <form className={[styles.container, className ? className : ''].join(' ')} onSubmit={submitHandler} >
      <SearchInput onChange={onChangeInputHandler} value={queryText}/>
      <SearchButton />
    </form>
  );
};

export default SearchForm;
