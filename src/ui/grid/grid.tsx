import styles from "@/ui/grid/grid.module.css";
import AboutMe from "../grid-items/aboutme";
import ColorTheme from "../grid-items/color-theme";
import MyLocation from "../grid-items/myLocation";
import Projects from "../grid-items/Projects";
import Skills from "../grid-items/skills";

export default function Grid() {
  return (
    <div className={styles.grid}>
      <AboutMe />
      <ColorTheme />
      <MyLocation />
      <Projects />
      <Skills />
    </div>
  );
}
