import styles from "./hamburger.module.css";

export default function Hammburger() {
  return (
    <button className={styles.hamburger}>
      <span className={styles.hamburger__span}></span>
      <span className={styles.hamburger__span}></span>
      <span className={styles.hamburger__span}></span>
    </button>
  );
}
