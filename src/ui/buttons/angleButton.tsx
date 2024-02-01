import styles from "@/ui/buttons/angleButton.module.css";
import { ReactNode } from "react";

export default function AngleButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a href={href} className={styles.leftButton} target="_blank">
      {children}
    </a>
  );
}
