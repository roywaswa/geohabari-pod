import Image from "next/image";
import styles from "./page.module.scss";
import { HeroSection,TopicsSection,AboutHost,NewsLetter,LatestEpisodes } from "./pageComponents";
import EpisodeBanner from "@/components/EpisodeBanner/EpisodeBanner";


export default function Home() {
  return (
    <main className={`${styles.page}`}>
      <div className={`${styles.abs_image_container} ${styles.hero_backdrop}`}>
        <div className={styles.image_container}>
          <Image alt="Nairobi aerial view" src='/images/nairobi_gray.png' fill/>
        </div>
      </div>
      <HeroSection />
      <EpisodeBanner/>
      <TopicsSection />
      <LatestEpisodes />
      <NewsLetter />
      <div className={`${styles.abs_image_container} ${styles.footer_backdrop}`}>
        <div className={styles.image_container}>
          <Image alt="Dar-es Salaam aerial view" src='/images/dar_es_salaam.png' fill/>
        </div>
      </div>
    </main>
  );
}




