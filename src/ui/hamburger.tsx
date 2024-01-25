import styles from "./hamburger.module.css";

export default function Hammburger({
  onOpenHandler,
}: {
  onOpenHandler?: () => void;
}) {
  return (
    <button className={styles.hamburger} onClick={onOpenHandler}>
      <span className={styles.hamburger__span}></span>
      <span className={styles.hamburger__span}></span>
      <span className={styles.hamburger__span}></span>
    </button>
  );
}
