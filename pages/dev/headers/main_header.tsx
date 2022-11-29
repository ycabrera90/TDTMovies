import MainHeader from "@/components/headers/MainHeader/MainHeader";

export default function Home() {
  const backgroundColor = '#F5F5F5';

  return (
    <main style={{ background: backgroundColor, height: "100vh"}}>
      <MainHeader sampleTextProp="this is only a template" />
    </main>
  );
}
