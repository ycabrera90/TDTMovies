import MovieDetails from "@/components/layouts/MovieDetails/MovieDetails";

const dummyMovieDetails = {
  title: 'Black Adam',
  genres: ['Acción', 'Fantasía', 'Ciencia Ficción'],
  overview: 'Emily, que tiene una deuda estudiantil y está excluida del mercado laboral debido a antecedentes penales menores, se ve involucrada en una estafa con tarjeta de crédito que la lleva al inframundo criminal de Los Ángeles, lo que finalmente la lleva a consecuencias mortales.',
  budget: 200000000,
  releaseDate: '2022-10-19',
  runtime: 124,
  voteAverage: 7029,
  spokenLanguages: ['English', 'Dansk'],
  posterImage: 'https://image.tmdb.org/t/p/w400//7MwrqCY0AZw3ZWp1F8BWsYLRWUu.jpg',
};


export default function Home() {
  const backgroundColor = '#F5F5F5';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <MovieDetails details={dummyMovieDetails} />
    </main>
  );
}


// title: string;
// genres: string[];
// overview: string;
// budget: number;
// releaseDate: string;
// runtime: number | null;
// voteAverage: number;
// spokenLanguages: string[];
// posterImage: string | null;