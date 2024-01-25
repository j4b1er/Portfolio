import styles from "@/ui/grid/grid.module.css";
import AboutMe from "../grid-items/aboutme";

export default function Grid() {
  return (
    <div className={styles.grid}>
      <AboutMe />
    </div>
  );
}
