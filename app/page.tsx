import HeroDesktop from "./sections/hero/hero_desktop";
import Section2 from "./sections/section2/section2";


export default function Home() {
  return (
    <main className="bg-white ">
      <div className="flex flex-col gap-36">
      <HeroDesktop />
      <Section2 />
      </div>
    </main>
  )
}
