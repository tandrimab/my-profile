import Image from "next/image";
import Intro from "./components/ui/Intro";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-full">
      <Intro />
    </div>
  );
}
