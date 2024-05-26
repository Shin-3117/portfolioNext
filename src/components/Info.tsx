import Skills from "./Info/Skills";
import MyInfo from "./Info/MyInfo";

export default function Info() {
  return (
    <section className="h-screen text-white flex gap-4 p-4">
      <div>
        <MyInfo />
      </div>
      <div>
        <p className="text-6xl">
          Skills
        </p>
        <Skills />
      </div>
    </section>
  );
}
