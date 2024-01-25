import styles from "@/ui/grid/grid.module.css";
import AboutMe from "../grid-items/aboutme";
import ColorTheme from "../grid-items/color-theme";
import MyLocation from "../grid-items/myLocation";

export default function Grid() {
  return (
    <div className={styles.grid}>
      <AboutMe />
      <ColorTheme />
      <MyLocation />
    </div>
  );
}
