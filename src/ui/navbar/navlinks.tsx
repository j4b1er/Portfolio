import styles from "./navbar.module.css";

export default function NavLinks({
  onOpenHandler,
}: {
  onOpenHandler?: () => void;
}) {
  return (
    <ul className={styles.mainNavbar__container___ul}>
      <li>
        <a href="/" className={styles.mainNavbar__container___link}>
          Home
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={styles.mainNavbar__container___link}
          onClick={onOpenHandler}>
          Projects
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className={styles.mainNavbar__container___link}
          onClick={onOpenHandler}>
          Skills
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.mainNavbar__container___link}
          onClick={onOpenHandler}>
          More about me
        </a>
      </li>
    </ul>
  );
}
