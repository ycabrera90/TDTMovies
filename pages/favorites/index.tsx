import { ReactElement } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import MoviesGrid from '@/components/layouts/MoviesGrid/MoviesGrid';
import { IMoviesAPP } from '@/models/movies.type';
import { useAppSelector } from '@/redux/hooks';
import EmtyFavorites from '@/components/modals/EmtyFavorites/EmtyFavorites';

export interface IFavorites {
  popularMovies: IMoviesAPP;
}

const Favorites: NextPageWithLayout<IFavorites> = () => {
  const favoriteMovies = useAppSelector((state)=>state.auth.favoriteMovies);

  return (
    <>
      {favoriteMovies.length === 0 &&<EmtyFavorites />}
      {favoriteMovies.length !== 0 && <MoviesGrid movies={favoriteMovies} />}
    </>
  );
};

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>; 
};

export default Favorites;
