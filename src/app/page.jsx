import styles from "./page.module.scss";
import { HeroSection,TopicsSection,AboutHost,NewsLetter,LatestEpisodes } from "./pageComponents";
import useEpisodes from "@/hooks/useEpisodes";
import { DataBase } from "@/components/SplineAssets/SplineAssets";


export default function Home() {
  return (
    <main className={`${styles.page}`}>
      <HeroSection />
      {/* <DataBase /> */}
      {/* <TopicsSection />
      <LatestEpisodes />
      <AboutHost />
      <NewsLetter /> */}
    </main>
  );
}




