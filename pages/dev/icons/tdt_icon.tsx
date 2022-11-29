import TDTIcon from "@/components/icons/TDTIcon/TDTIcon";
import BaseTemplate from "@/components/templates/base/BaseTemplate";

export default function Home() {
  const backgroundColor = 'white';

  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem"}}>
      <TDTIcon onClick={()=> console.log('logo clicked')}/>
    </main>
  );
}
