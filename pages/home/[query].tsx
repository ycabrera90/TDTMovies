import { useRouter } from 'next/router';
import { ReactElement, useState, useContext, useEffect } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import { IMoviesAPP, moviesEmpty } from '@/models/movies.type';
import MainLayout, { MainLayoutContext } from '@/components/layouts/MainLayout/MainLayout';
import movieDbService from '@/services/movieDb.service';
import MoviesGrid from '@/components/layouts/MoviesGrid/MoviesGrid';
import NotFoundMovieModal from '@/components/modals/NotFoundMovieModal/NotFoundMovieModal';

export interface ISearchPage {}

const SearchPage: NextPageWithLayout<ISearchPage> = () => {
  const router = useRouter();
  const query = router.query.query;
  const mainLayoutCtx = useContext(MainLayoutContext);
  const [requestedMovies, setRequestedMovies] = useState<IMoviesAPP>(moviesEmpty);
  const [loading, setLoading] = useState<boolean>(true);

  const isMovieValid =
    requestedMovies.totalPages !== 0 &&
    requestedMovies.movies[0].title &&
    requestedMovies.movies[0].overview &&
    requestedMovies.movies[0].posterImage &&
    requestedMovies.movies[0].voteAverage;

  const searchMovies = async () => {
    if(query){
      setLoading(true);
      const requestedMovies: IMoviesAPP = await movieDbService.searchMovies(query as string, 1);
      setRequestedMovies(requestedMovies);
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies();
  }, [query]);

  const getMoreMovies = async (page: number) => {
    if (!requestedMovies) {
      return;
    }

    if (page < requestedMovies.totalPages) {
      const moreMovies = await movieDbService.searchMovies(
        query as string,
        page
      );
      
      setRequestedMovies((state) => {
        return {
          ...state,
          movies: [...state.movies, ...moreMovies.movies],
        };
      });
    }
  };

  // if the scroll is above the 60% of the page, get more movies
  useEffect(() => {
    getMoreMovies(mainLayoutCtx.scrollEvent);
  }, [mainLayoutCtx.scrollEvent]);

  return (
    <>
      {!isMovieValid && !loading && <NotFoundMovieModal />}
      {isMovieValid && !loading &&  <MoviesGrid movies={requestedMovies.movies} />}
    </>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout scroll={{ trigger: 60 }}>{page}</MainLayout>; 
};

export default SearchPage;
