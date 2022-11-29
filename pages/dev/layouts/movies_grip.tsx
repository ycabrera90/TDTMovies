import MoviesGrid from "@/components/layouts/MoviesGrid/MoviesGrid";

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

const HomePage: IHomeScreen = () => {
  return (
    <div>
      <MoviesGrid movies={popularMovies} />
    </div>
  );
};

export default HomePage;
