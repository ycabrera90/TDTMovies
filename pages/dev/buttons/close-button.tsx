import CloseButton from "@/components/buttons/CloseButton/CloseButton";

export default function Home() {
  const backgroundColor = 'white';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <CloseButton />
    </main>
  );
}
