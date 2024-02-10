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
  return (
    <ul className={styles.mainNavbar__container___ul}>
      {LINKS_DATA.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={styles.mainNavbar__container___link}
            onClick={onOpenHandler}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
