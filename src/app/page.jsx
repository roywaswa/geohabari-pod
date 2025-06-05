import Image from "next/image";
import styles from "./page.module.scss";
// import { TopicsSection,AboutHost,NewsLetter,LatestEpisodes } from "./pageComponents";
import HeroSection from "@/sections/HeroSection/HeroSection.lazy";
import EpisodeBanner from "@/components/EpisodeBanner/EpisodeBanner";
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




