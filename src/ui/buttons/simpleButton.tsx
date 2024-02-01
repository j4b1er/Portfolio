import styles from "@/ui/buttons/simpleButton.module.css";

export default function SimpleButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} className={styles.simpleBtn} target="_blank">
      {children}
    </a>
  );
}
