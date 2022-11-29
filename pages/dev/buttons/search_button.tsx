import SearchButton from "@/components/buttons/SearchButton/SearchButton";
import BaseTemplate from "@/components/templates/base/BaseTemplate";

export default function Home() {
  const backgroundColor = 'white';
  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem" }}>
      <SearchButton amount={3} onClick={(ev)=>{console.log(ev)}} />
    </main>
  );
}
