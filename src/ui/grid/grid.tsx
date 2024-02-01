import styles from "@/ui/grid/grid.module.css";
import AboutMe from "../grid-items/aboutme";
import ColorTheme from "../grid-items/color-theme";
import MyLocation from "../grid-items/myLocation";
import ProjectGlor from "@/ui/grid-items/projectsGlor";
import Skills from "../grid-items/skills";
import ProjectDZ from "../grid-items/projectsDz";
import { PROJECTS_DATA } from "@/lib/projects";
import Project from "../grid-items/project";

export default function Grid() {
  return (
    <>
      <div className={`${styles.grid} ${styles.heroGrid}`}>
        <AboutMe />
        <ColorTheme />
        <MyLocation />
      </div>
      <div className={`${styles.grid} ${styles.projectGrid}`} id="projects">
        {PROJECTS_DATA.map((project, i) => (
          <Project ProjectData={project} key={`${i}-${project.id}`} />
        ))}
      </div>
      <div className={`${styles.grid} ${styles.skillsGrid}`} id="skills">
        <Skills />
      </div>
    </>
  );
}
