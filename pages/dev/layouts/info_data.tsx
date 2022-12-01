import InfoData from "@/components/layouts/InfoData/InfoData";

export default function Home() {
  const backgroundColor = 'white';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <InfoData tag="Presupuesto" value={200000000} unit="$" />
      <InfoData tag="Lanzamiento" value="2022-10-19" />
      <InfoData tag="Duración" value="124" unit="min" />
      <InfoData tag="Valoración" value={7029} />
    </main>
  );
}
