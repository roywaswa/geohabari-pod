import styles from "./page.module.scss";
import HeroSection from "@/sections/HeroSection/HeroSection.lazy";
import LatestEp from "@/sections/LatestEp/LatestEp";
import ShowThemes from "@/sections/ShowThemes/ShowThemes";
import RecentEps from "@/sections/RecentEps/RecentEps";
import QuoteCards from "@/sections/QuoteCards/QuoteCards";
import NewsLetter from "@/sections/NewsLetter/NewsLetter";


export default function Home() {
  return (
    <main className={`${styles.page}`}>
      <HeroSection />
      <LatestEp/>
      <ShowThemes />
      <RecentEps/>
      <QuoteCards />
      <NewsLetter />
    </main>
  );
}




