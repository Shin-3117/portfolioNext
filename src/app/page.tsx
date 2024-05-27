import Info from "@/components/Info";
import JSG from "@/components/JSG";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <JSG />
      <Info />
      <Projects />
    </main>
  );
}
