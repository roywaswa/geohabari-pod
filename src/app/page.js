import styles from "./page.module.scss";
import ComingSoon from "../components/ComingSoon/ComingSoon"
import Head from "next/head";

export const metadata = {
  title: "GEOHABARI | Coming Soon"
}

export default function Home() {
  return (
    <main className={styles.page}>
      <ComingSoon/>
    </main>
  );
}
