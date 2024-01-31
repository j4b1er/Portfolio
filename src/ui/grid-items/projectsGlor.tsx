import styles from "@/ui/grid-items/grid-item.module.css";
import AngleButton from "../buttons/angleButton";

export default function ProjectGlor() {
  return (
    <div
      className={`${styles.gridItem} ${styles.projects} ${styles.projectGlor}`}
      id="projects">
      <div
        className={`${styles.flexContainer}`}
        style={{ justifyContent: "flex-start", gap: "1.5rem" }}>
        <div className={`${styles.gridItem__header}`}>
          <div className="componentIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </div>
          <h3 className="text-black">Project</h3>
          <AngleButton href={"#"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </AngleButton>
        </div>
        <div className={`${styles.projects__content}`}>
          <div className={`${styles.projects__contentDesc}`}>
            <h2>Glor Website</h2>
            <p>Cable installations and security company.</p>
          </div>
          <footer className={`${styles.projects__contentFooter}`}>
            <div className={`${styles.projects__contentFooter___pills}`}>
              <ul>
                <li>What was used:</li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1052 1052">
                    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                    <path
                      d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                      fill="#323330"
                    />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                    <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                    <path
                      fill="#ecedee"
                      d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                    />
                    <path
                      fill="#fff"
                      d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                    />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                    <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                    <path
                      fill="#ecedee"
                      d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
                    />
                    <path
                      fill="#fff"
                      d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
                    />
                  </svg>
                </li>
              </ul>
              <a href="#">Source</a>
            </div>
            <div className={`${styles.projects__contentFooter___image}`}>
              <img
                src="/projects-ss/glor.jpg"
                alt="Screen shot of a website project"
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
