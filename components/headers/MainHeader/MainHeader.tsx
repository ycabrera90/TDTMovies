// v1.0.4
import { FC } from "react";
import SearchForm from "@/components/forms/SearchForm/SearchForm";
import FavoritesButton from "@/components/buttons/FavoritesButton/FavoritesButton";
import useDOM from "@/hooks/useDOM";
import breakPoints from '@/styles/breakpoints.module.scss';
import styles from "./MainHeader.module.scss";
import TDTIcon from "@/components/icons/TDTIcon/TDTIcon";

export interface IMainHeader {
  className?: string;
}

const MainHeader: FC<IMainHeader> = ({ className }) => {
  const { screen } = useDOM("rem");

  const largeHeader = screen.size.width > +breakPoints.smSreens;

  return (
    <header
      className={[styles.container, className ? className : ""].join(" ")}
    >
      <TDTIcon/>
      {largeHeader && (
        <>
          <SearchForm />
          <FavoritesButton />
        </>
      )}
      
    </header>
  );
};

export default MainHeader;
