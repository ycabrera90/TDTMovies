import NotFoundMovieModal from "@/components/modals/NotFoundMovieModal/NotFoundMovieModal";

export default function Home() {
  const backgroundColor = '#F5F5F5';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <NotFoundMovieModal />
    </main>
  );
}
