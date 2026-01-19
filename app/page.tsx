import HeroDesktop from "./sections/hero/hero_desktop";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import Section5 from "./sections/section5/section5";
import Footer from "./scaffold/footer/footer";


export default function Home() {
  return (
    <main className="bg-white">
      <div className="flex flex-col gap-20 sm:gap-28 md:gap-36">
        <HeroDesktop />
        <Section2 />
      </div>
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  )
}
