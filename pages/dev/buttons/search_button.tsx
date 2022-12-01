import SearchButton from "@/components/buttons/SearchButton/SearchButton";

export default function Home() {
  const backgroundColor = 'white';
  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem" }}>
      <SearchButton onClick={(ev)=>{console.log(ev)}} />
    </main>
  );
}
