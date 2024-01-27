import styles from "./mobilemenu.module.css";
import NavLinks from "./navlinks";

export default function MobileDropdown({
  dataVisible,
}: {
  dataVisible: boolean;
}) {
  return (
    <div className={styles.mobileDropdown} data-visible={dataVisible}>
      <div className={styles.mobileDropdown__container}>
        <NavLinks />
      </div>
    </div>
  );
}
