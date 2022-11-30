import { ReactElement, useState, useContext, useEffect } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import movieDbService from '@/services/movieDb.service';
import MainLayout, { MainLayoutContext } from '@/components/layouts/MainLayout/MainLayout';
import MoviesGrid from '@/components/layouts/MoviesGrid/MoviesGrid';
import { IMoviesAPP, moviesEmpty } from '@/models/movies.type';
import { useRouter } from 'next/router';
import MovieNotFound from '@/components/messages/MovieNotFound';

export interface ISearchPage {}

const SearchPage: NextPageWithLayout<ISearchPage> = () => {
  const router = useRouter();
  const query = router.query.query;
  const mainLayoutCtx = useContext(MainLayoutContext);
  const [requestedMovies, setRequestedMovies] = useState<IMoviesAPP>(moviesEmpty);

  console.log(requestedMovies)

  const searchMovies = async () => {
    if(query){
      const requestedMovies: IMoviesAPP = await movieDbService.searchMovies(query as string, 1);
      setRequestedMovies(requestedMovies);
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
      {requestedMovies.totalPages === 0 && <MovieNotFound />}
      {requestedMovies.totalPages !==0 && <MoviesGrid movies={requestedMovies.movies} />}
    </>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout scroll={{ trigger: 60 }}>{page}</MainLayout>; 
};

export default SearchPage;
