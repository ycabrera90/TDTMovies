import { useRouter } from "next/router";
import { FC } from "react";
import useDOM from "@/hooks/useDOM";
import TDTIcon from "@/components/icons/TDTIcon/TDTIcon";
import SearchForm from "@/components/forms/SearchForm/SearchForm";
import FavoritesButton from "@/components/buttons/FavoritesButton/FavoritesButton";
import breakPoints from '@/styles/breakpoints.module.scss';
import styles from "./MainHeader.module.scss";
import { useAppSelector } from "@/redux/hooks";

export interface IMainHeader {
  className?: string;
}

const MainHeader: FC<IMainHeader> = ({ className }) => {
  const totalFavoriteMovies = useAppSelector((state)=> state.auth.totalFavoriteMovies);
  const router = useRouter();
  const { screen } = useDOM("rem");

  const largeHeader = screen.size.width > +breakPoints.smSreens; // <-- only for large screens

  return (
    <header className={[styles.container, className ? className : ""].join(" ")}>
      <TDTIcon onClick={() => router.push('/home')}/>
      {largeHeader && (
        <>
          <SearchForm />
          <FavoritesButton 
            amount={totalFavoriteMovies} 
            onClick={() => router.push('/favorites')} />
        </>
      )}
    </header>
  );
};

export default MainHeader;
