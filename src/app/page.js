import styles from "./page.module.scss";
import ComingSoon from "../components/ComingSoon/ComingSoon"

export default function Home() {
  return (
    <main className={styles.page}>
      <ComingSoon/>
    </main>
  );
}
