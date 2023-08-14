import Image from "next/image";
import ClientComponent from "./components/ClientComponent";
import Static from "./components/StaticWithoutHook";
import TSComponent from "./components/TSComponent";

export default function Home() {
  return (
    <div>
      <ClientComponent />
      <TSComponent f_name="FIRST" l_name="LAST" />
      <Static />
    </div>
  );
}
