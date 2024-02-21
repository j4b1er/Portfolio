import styles from "@/ui/grid-items/grid-item.module.css";

export default function AboutMe() {
  return (
    <div className={`${styles.gridItem} ${styles.aboutMe}`}>
      <div className={styles.flexContainer}>
        <div className={`${styles.gridItem__header}`}>
          <div className="componentIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
          <h3>About me</h3>
        </div>
        <div className={styles.aboutMe__content}>
          <h1>Javier Pardo</h1>
          <p>
            I&apos;m a frontend developer in love of technology, coding and
            beautiful designs.
          </p>
          <div className={styles.aboutMe__content___buttons}></div>
        </div>
      </div>
    </div>
  );
}
