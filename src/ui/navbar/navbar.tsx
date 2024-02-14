"use client";

import NavLinks from "./navlinks";
import Button from "../buttons/button";

import styles from "./navbar.module.css";
import Logo from "../logos/logo";
import MobileDropdown from "./mobilemenu";
import Hammburger from "./hamburger";
import { useState } from "react";

// export default function Navbar({ children }: { children: React.ReactNode }) {
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpenHandler() {
    setIsOpen((value) => !value);
  }

  return (
    <nav className={styles.mainNavbar}>
      <div className={styles.mainNavbar__container}>
        <Logo />
        <div className={styles.mainNavbar__desktopNavbar}>
          <NavLinks />
          {/* {children} */}
          {/* <Button href={"#"}>
            <span>Let&lsquo;s chat</span>
          </Button> */}
        </div>
        <Hammburger onOpenHandler={setOpenHandler} isOpen={isOpen} />
      </div>
      {isOpen && (
        <MobileDropdown dataVisible={isOpen}>
          <NavLinks onOpenHandler={setOpenHandler} />
        </MobileDropdown>
      )}
    </nav>
  );
}
