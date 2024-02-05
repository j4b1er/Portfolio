"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { LINKS_DATA } from "@/lib/navlinks";
import { useEffect, useState } from "react";

export default function NavLinks({
  onOpenHandler,
}: {
  onOpenHandler?: () => void;
}) {
  // const hash = window.location.hash;
  // console.log(hash);
  //I could use a useState and useEffect to check when there is a click on a link and also to validate if it has hash

  return (
    <ul className={styles.mainNavbar__container___ul}>
      {LINKS_DATA.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={styles.mainNavbar__container___link}
            onClick={() => onOpenHandler}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
