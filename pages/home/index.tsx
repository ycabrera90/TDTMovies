import { ReactElement } from 'react';
import movieDbService from '@/services/movieDb.service';
import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import MoviesGrid from '@/components/layouts/MoviesGrid/MoviesGrid';
import { NextPageWithLayout } from '@/pages/_app';
import { IMoviesAPP } from '@/models/movies.type';

export interface IHomeScreen {}

export interface IHomeScreen {
  popularMovies: IMoviesAPP;
}

const HomePage: NextPageWithLayout<IHomeScreen> = ({popularMovies}) => {
  return <div>
    <MoviesGrid movies={popularMovies.movies}/>
  </div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
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
