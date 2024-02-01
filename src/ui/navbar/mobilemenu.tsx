import styles from "./mobilemenu.module.css";
import NavLinks from "./navlinks";

export default function MobileDropdown({
  children,
  dataVisible,
}: {
  children: React.ReactNode;
  dataVisible: boolean;
}) {
  return (
    <div className={styles.mobileDropdown} data-visible={dataVisible}>
      <div className={styles.mobileDropdown__container}>{children}</div>
    </div>
  );
}
