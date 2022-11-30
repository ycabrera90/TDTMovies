import MovieNotFound from "@/components/messages/MovieNotFound";

export default function Home() {
  const backgroundColor = '#F5F5F5';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <MovieNotFound sampleTextProp="this is only a template" />
    </main>
  );
}
