import styles from "@/ui/grid-items/grid-item.module.css";

export default function ColorTheme() {
  return (
    <div className={`${styles.gridItem} ${styles.colorTheme}`}>
      <div className={`${styles.flexContainer}`}>
        <div className={`${styles.colorTheme__header}`}>
          <h3>Theme</h3>
        </div>
        <div className={`${styles.colorTheme__content}`}>aawd</div>
      </div>
    </div>
  );
}
