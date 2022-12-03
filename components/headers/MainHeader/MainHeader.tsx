import { FC } from "react";
import SearchForm from "@/components/forms/SearchForm/SearchForm";
import FavoritesButton from "@/components/buttons/FavoritesButton/FavoritesButton";
import useDOM from "@/hooks/useDOM";
import styles from "./MainHeader.module.scss";
import TDTIcon from "@/components/icons/TDTIcon/TDTIcon";
import { useRouter } from "next/router";
import breakPoints from '@/styles/breakpoints.module.scss';

export interface IMainHeader {
  className?: string;
}

const MainHeader: FC<IMainHeader> = ({ className }) => {
  const router = useRouter();
  const { screen } = useDOM("rem");

  const largeHeader = screen.size.width > +breakPoints.smSreens; // <-- only for large screens

  return (
    <header className={[styles.container, className ? className : ""].join(" ")}>
      <TDTIcon onClick={() => router.push('/home')}/>
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
