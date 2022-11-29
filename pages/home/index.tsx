import { ReactElement, useState, useContext, useEffect } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import movieDbService from '@/services/movieDb.service';
import MainLayout, { MainLayoutContext } from '@/components/layouts/MainLayout/MainLayout';
import MoviesGrid from '@/components/layouts/MoviesGrid/MoviesGrid';
import { IMoviesAPP, IMoviesResultsAPP } from '@/models/movies.type';
export interface IHomeScreen {
  popularMovies: IMoviesAPP;
}

const HomePage: NextPageWithLayout<IHomeScreen> = ({ popularMovies }) => {
  const mainLayoutCtx = useContext(MainLayoutContext);
  const [movies, setMovies] = useState<IMoviesResultsAPP[]>([...popularMovies.movies]);

  const getMorePopularMovies = async (page: number) => {
    if (page < popularMovies.totalPages) {
      const morePopularMovies = await movieDbService.getPopularMovies(page);
      setMovies((state) => [...state, ...morePopularMovies.movies]);
    }
  };

  // if the scroll is above the 75% of the page, get more movies
  useEffect(() => {
    getMorePopularMovies(mainLayoutCtx.scrollEvent);
  }, [mainLayoutCtx.scrollEvent]);

  return (
      <MoviesGrid movies={movies} />
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout scroll={{ trigger: 60 }}>{page}</MainLayout>; 
};

export async function getStaticProps() {
  const popularMovies = await movieDbService.getPopularMovies(1);
  return {
    props: {
      popularMovies,
    },
  };
}

export default HomePage;
