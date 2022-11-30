import LoadingModal from "@/components/modals/LoadingModal/LoadingModal";

export default function Home() {
  const backgroundColor = 'white';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <LoadingModal />
    </main>
  );
}
