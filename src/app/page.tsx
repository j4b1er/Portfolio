import styles from "./page.module.css";
import Grid from "@/ui/grid/grid";
import GradientBackground from "@/ui/gradientBackground";

export default function Home() {
  return (
    <main>
      <GradientBackground />
      <div className={styles.gridContainer}>
        <Grid />
      </div>
    </main>
  );
}
