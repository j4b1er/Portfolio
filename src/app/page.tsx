import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@/ui/grid/grid";

export default function Home() {
  return (
    <main>
      <div className={styles.homeBackground}></div>
      <div className={styles.gridContainer}>
        <Grid />
      </div>
    </main>
  );
}
