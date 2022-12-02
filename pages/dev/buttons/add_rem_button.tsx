import AddRemButton from "@/components/buttons/AddRemButton/AddRemButton";
import { MinusCircleOutlined } from '@ant-design/icons';

export default function Home() {
  const backgroundColor = 'black';

  return (
    <main
      style={{ background: backgroundColor, height: '100vh', padding: '1rem', display: 'flex', gap: '1rem' }}
    >
      <AddRemButton type="add" />
      <AddRemButton type="remove" />
    </main>
  );
}
