import styles from "./page.module.scss";
import { HeroSection,TopicsSection,AboutHost,NewsLetter,LatestEpisodes } from "./pageComponents";
import { DataBase } from "@/components/SplineAssets/SplineAssets";


export default function Home() {
  return (
    <main className={`${styles.page}`}>
      <HeroSection />
      <TopicsSection />
      <LatestEpisodes />
      <NewsLetter />
    </main>
  );
}




