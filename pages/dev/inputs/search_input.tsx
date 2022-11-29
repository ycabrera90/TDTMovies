import SearchInput from "@/components/inputs/SearchInput/SearchInput";

export default function Home() {
  const backgroundColor = 'white';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <SearchInput sampleTextProp="this is only a template" />
    </main>
  );
}
