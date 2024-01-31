import { ReactNode, CSSProperties } from "react";
import styles from "./button.module.css";

export default function Button({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a href={href} className={styles.btn}>
      {children}
    </a>
  );
}
