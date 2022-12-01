import MoviesGrid from "@/components/layouts/MoviesGrid/MoviesGrid";

export interface IHomeScreen {}

const popularMovies = [
  {
    id: 1,
    title: "Black Adamm mmmm mmmm mmmmm mmmmm mmmmmm mmmmmmm mmm mmmmmmmmmmm",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitadosssssssssssssssssssssssss...",
    voteAverage: 9.3,
  },
  {
    id: 2,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 3,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 4,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 4,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 5,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 5,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 5,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 5,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 5,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 5,
    title: "Black Adam",
    posterImage: "https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
    overview: "Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados...",
    voteAverage: 9.3,
  },
  {
    id: 5,
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
