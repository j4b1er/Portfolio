import styles from "@/ui/grid/grid.module.css";
import AboutMe from "../grid-items/aboutme";
import ColorTheme from "../grid-items/color-theme";
import MyLocation from "../grid-items/myLocation";
import ProjectGlor from "@/ui/grid-items/projectsGlor";
import Skills from "../grid-items/skills";
import ProjectDZ from "../grid-items/projectsDz";

export default function Grid() {
  return (
    <div className={styles.grid}>
      <AboutMe />
      <ColorTheme />
      <MyLocation />
      <ProjectGlor />
      <ProjectDZ />
      <Skills />
    </div>
  );
}
