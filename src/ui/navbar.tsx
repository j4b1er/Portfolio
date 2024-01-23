import styles from "./navbar.module.css";
import NavLinks from "./navlinks";
import { roboto } from "./fonts";

export default function Navbar() {
  return (
    <nav className={`${styles.mainNavbar} ${roboto.variable}`}>
      <div className={styles.mainNavbar__container}>
        <NavLinks />
      </div>
    </nav>
  );
}
