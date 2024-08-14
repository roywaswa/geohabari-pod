import styles from "./page.module.scss";
import ComingSoon from "../components/ComingSoon/ComingSoon"
import Head from "next/head";

export const metadata = {
  title: "Geohabari Podcast | Home"
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <ComingSoon/> */}
    </div>
  );
}
