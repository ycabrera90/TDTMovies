import MovieCard from "@/components/cards/MovieCard/MovieCard";

export default function Home() {
  const backgroundColor = '#F5F5F5';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem" }}>
      <MovieCard
        id={232425}
        title="Black Adam"
        imageUrl="https://image.tmdb.org/t/p/w400/moDLTCdLx38kMhN53KOTw0LdWMh.jpg"
        overview="Paul Baumer y sus amigos Albert y Muller, incitados incitados incitados..."
        voteAverage={9.2}
     />
    </main>
  );
}
