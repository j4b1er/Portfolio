import styles from "./navbar.module.css";

export default function NavLinks() {
  return (
    <>
      <ul className={styles.mainNavbar__container___ul}>
        <li>
          <a href="#" className={styles.mainNavbar__container___link}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.mainNavbar__container___link}>
            Projects
          </a>
        </li>
        <li>
          <a href="#" className={styles.mainNavbar__container___link}>
            Skills
          </a>
        </li>
        <li>
          <a href="#" className={styles.mainNavbar__container___link}>
            More about me
          </a>
        </li>
      </ul>
    </>
  );
}
