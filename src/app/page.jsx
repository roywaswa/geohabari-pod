import Image from "next/image";
import styles from "./page.module.scss";
import { TopicsSection,AboutHost,NewsLetter,LatestEpisodes } from "./pageComponents";
import HeroSection from "@/sections/HeroSection/HeroSection.lazy";
import EpisodeBanner from "@/components/EpisodeBanner/EpisodeBanner";
import LatestEp from "@/sections/LatestEp/LatestEp";


export default function Home() {
  return (
    <main className={`${styles.page}`}>
      {/* <div className={`${styles.abs_image_container} ${styles.hero_backdrop}`}>
        <div className={styles.image_container}>
          <Image alt="Nairobi aerial view" src='/images/nairobi_gray.png' fill/>
        </div>
      </div> */}
      <HeroSection />
      <LatestEp/>
      {/* <EpisodeBanner/> */}
      {/* <TopicsSection /> */}
      {/* <LatestEpisodes /> */}
      {/* <NewsLetter /> */}
      {/* <div className={`${styles.abs_image_container} ${styles.footer_backdrop}`}>
        <div className={styles.image_container}>
          <Image alt="Dar-es Salaam aerial view" src='/images/dar_es_salaam.png' fill/>
        </div>
      </div> */}
    </main>
  );
}




