import styles from "./hamburger.module.css";

export default function Hammburger({
  onOpenHandler,
  isOpen,
}: {
  onOpenHandler?: () => void;
  isOpen: boolean;
}) {
  return (
    <button
      className={styles.hamburger}
      onClick={onOpenHandler}
      aria-expanded={isOpen}>
      <span className={styles.hamburger__span}></span>
      <span className={styles.hamburger__span}></span>
      <span className={styles.hamburger__span}></span>
    </button>
  );
}
