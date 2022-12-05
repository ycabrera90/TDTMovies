import { useRouter } from "next/router";
import { FC, useState } from "react";
import useDOM from "@/hooks/useDOM";
import { useAppSelector } from "@/redux/hooks";
import TDTIcon from "@/components/icons/TDTIcon/TDTIcon";
import SearchForm from "@/components/forms/SearchForm/SearchForm";
import FavoritesButton from "@/components/buttons/FavoritesButton/FavoritesButton";
import ToggleMenu from "@/components/layouts/ToggleMenu/ToggleMenu";
import ToggleButton from "@/components/buttons/ToggleButton/ToggleButton";
import breakPoints from '@/styles/breakpoints.module.scss';
import styles from "./MainHeader.module.scss";

export interface IMainHeader {
  className?: string;
}

const MainHeader: FC<IMainHeader> = ({ className }) => {
  const router = useRouter();
  const { screen } = useDOM("rem");
  const totalFavoriteMovies = useAppSelector((state)=> state.auth.totalFavoriteMovies);
  const [isMenuExpanded,setIsMenuExpanded ] = useState<boolean>(false);

  const toggleButtonClickHandler = () => {
    setIsMenuExpanded(!isMenuExpanded);
  }

  const favoriteButtonClickHandler = () => {
    router.push('/favorites');
    setIsMenuExpanded(false);
  }

  const logoClickHandler = () => {
    router.push('/home');
    setIsMenuExpanded(false);
  }

  return (
    <>
      {screen && screen.size.width !== null && (
        <header
          className={[styles.container, className ? className : ''].join(' ')}
        >
          <TDTIcon onClick={logoClickHandler} />

          {screen.size.width > +breakPoints.smSreens ? (
            <>
              <SearchForm />
              <FavoritesButton
                amount={totalFavoriteMovies}
                onClick={favoriteButtonClickHandler}
              />
            </>
          ) : (
            <>
              <ToggleButton
                clicked={isMenuExpanded}
                onClick={toggleButtonClickHandler}
              />
              <ToggleMenu
                expanded={isMenuExpanded}
                onBackdropClick={() => setIsMenuExpanded(false)}
              >
                <SearchForm onSubmitted={() => setIsMenuExpanded(false)} />
                <FavoritesButton
                  amount={totalFavoriteMovies}
                  onClick={favoriteButtonClickHandler}
                />
              </ToggleMenu>
            </>
          )}
        </header>
      )}
    </>
  );
};

export default MainHeader;
