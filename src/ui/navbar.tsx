import NavLinks from "./navlinks";
import Button from "./button";

import { roboto } from "./fonts";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.mainNavbar} ${roboto.variable}`}>
      <div className={styles.mainNavbar__container}>
        <NavLinks />
        <Button />
      </div>
    </nav>
  );
}
