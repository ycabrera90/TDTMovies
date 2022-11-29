import { ReactElement } from 'react';
import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import MoviesGrid from '@/components/layouts/MoviesGrid/MoviesGrid';
import { NextPageWithLayout } from '../_app';

export interface IHomeScreen {}

const popularMovies = [
  {
    title: "Black Adamm mmmm mmmm mmmmm mmmmm mmmmmm mmmmmmm mmm mmmmmmmmmmm",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitadosssssssssssssssssssssssss...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
];

const HomePage: NextPageWithLayout<IHomeScreen> = () => {
  return <div>
    <MoviesGrid movies={popularMovies}/>
  </div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
