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
  const [movieDetailsValid, setMovieDetailsValid] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const getDetails = async ( id:number ) => {
    setLoading(true);
    try {
      const requestedDetails: IDetailAPP = await movieDbService.getMovieDetails(id);
      setMovieDetailsValid(true);
      setMovieDetails(requestedDetails);
    } catch (error) {
      setMovieDetailsValid(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (movieId && typeof movieId === 'string') {
      getDetails(+movieId);
    }
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
