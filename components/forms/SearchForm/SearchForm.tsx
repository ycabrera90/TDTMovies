import { useRouter } from "next/router";
import { BaseSyntheticEvent, FC, useEffect, useState } from "react";
import SearchInput from "@/components/inputs/SearchInput/SearchInput";
import SearchButton from "@/components/buttons/SearchButton/SearchButton";
import styles from "./SearchForm.module.scss";

export interface IBaseTemplate {
  className?: string;
  onSubmitted?: () => void;
}

const SearchForm: FC<IBaseTemplate> = ({ className, onSubmitted }) => {
  const [queryText, setQueryText] = useState<string>('');
  const router = useRouter();

  const onChangeInputHandler = (ev: BaseSyntheticEvent) => {
    setQueryText(ev.target.value);
  }

  const submitHandler = (ev: BaseSyntheticEvent) => {
    ev.preventDefault();

    if (onSubmitted) {
      onSubmitted();
    }

    if (queryText) {
      router.push(`/home/${encodeURIComponent(queryText.trim())}`);
    } else {
      router.push(`/home`);
    }
  }

  // when the user go back to the home page, the input value is reset
  useEffect(() => {
    if(router.pathname === '/home') {
      setQueryText('');
    }
  }, [router.pathname]);

  return (
    <form 
      className={[styles.container, className ? className : ''].join(' ')} 
      onSubmit={submitHandler}
    >
      <SearchInput onChange={onChangeInputHandler} value={queryText}/>
      <SearchButton onClick={submitHandler} />
    </form>
  );
};

export default SearchForm;
