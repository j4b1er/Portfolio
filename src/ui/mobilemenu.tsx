import styles from "./mobilemenu.module.css";
import NavLinks from "./navlinks";

export default function MobileDropdown() {
  return (
    <div className={styles.mobileDropdown}>
      <div className={styles.mobileDropdown__container}>
        <NavLinks />
      </div>
    </div>
  );
}
