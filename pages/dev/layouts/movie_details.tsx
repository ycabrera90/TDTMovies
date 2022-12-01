import MovieDetails from "@/components/layouts/MovieDetails/MovieDetails";

export const dummyMovieDetails = {
  title: 'Black Adam',
  genres: [
    'Acción',
    'Fantasía',
    'Ciencia Ficción',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
    'Fantasía',
  ],
  overview:
    'Emily, que tiene una deuda estudiantil y está excluida del mercado laboral debido a antecedentes penales menores, se ve involucrada en una estafa con tarjeta de crédito que la lleva al inframundo criminal de Los Ángeles, lo que finalmente la lleva a consecuencias mortales. Lorem Emily, que tiene una deuda estudiantil y está excluida del mercado laboral debido a antecedentes penales menores, se ve involucrada en una estafa con tarjeta de crédito que la lleva al inframundo criminal de Los Ángeles, lo que finalmente la lleva a consecuencias mortales. Lorem',
  budget: 200000000,
  releaseDate: '2022-10-19',
  runtime: 124,
  voteAverage: 7.288,
  spokenLanguages: ['English', 'Dansk','Dansk','Dansk','Dansk','Dansk','Dansk','Dansk','Dansk','Dansk','Dansk','Dansk',],
  posterImage:
    'https://image.tmdb.org/t/p/w400//7MwrqCY0AZw3ZWp1F8BWsYLRWUu.jpg',
};


export default function Home() {
  const backgroundColor = '#F5F5F5';

  return (
    <main style={{ background: backgroundColor, height: "100vh" }}>
      <MovieDetails details={dummyMovieDetails} />
    </main>
  );
}
