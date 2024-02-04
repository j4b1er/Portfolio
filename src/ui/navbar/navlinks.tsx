import Link from "next/link";
import styles from "./navbar.module.css";
import { Links } from "@/lib/navlinks";

export default function NavLinks({
  onOpenHandler,
}: {
  onOpenHandler?: () => void;
}) {
  return (
    <ul className={styles.mainNavbar__container___ul}>
      {Links.map((link) => (
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
