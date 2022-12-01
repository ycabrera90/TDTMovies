import { useRouter } from 'next/router';
import { ReactElement, useState, useEffect } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import movieDbService from '@/services/movieDb.service';
import NotFoundMovieModal from '@/components/modals/NotFoundMovieModal/NotFoundMovieModal';
import LoadingModal from '@/components/modals/LoadingModal/LoadingModal';
import MovieDetails from '@/components/layouts/MovieDetails/MovieDetails';
import { detailMovieEmpty, IDetailAPP } from '@/models/detailMovie.type';

export interface ISearchPage {}

const SearchPage: NextPageWithLayout<ISearchPage> = () => {
  const router = useRouter();
  const movieId = router.query.movie_id;
  const [movieDetails, setMovieDetails] = useState<IDetailAPP>(detailMovieEmpty);
  const [movieDetailsValid, setMovieDetailsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getDetails = async () => {
    if(typeof movieId === 'string'){
      setLoading(true);
      try{
        const requestedMovies: IDetailAPP = await movieDbService.getMovieDetails(+movieId);
        setMovieDetailsValid(true);
        setMovieDetails(requestedMovies);
      } catch (error) {
        setMovieDetailsValid(false);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
    setLoading(false);
  }, [movieId]);

  return (
    <>
      {loading && <LoadingModal />}
      {!loading && !movieDetailsValid && <NotFoundMovieModal />}
      {!loading && movieDetailsValid && <MovieDetails details={movieDetails} />}
    </>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout scroll={{ trigger: 60 }}>{page}</MainLayout>; 
};

export default SearchPage;
