import BaseTemplate from "@/components/templates/base/BaseTemplate";

export default function Home() {
  const backgroundColor = 'white';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <BaseTemplate sampleTextProp="this is only a template" />
    </main>
  );
}
