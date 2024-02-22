import styles from "./button.module.css";

export default function Button({
  children,
  href,
  newWindow,
}: {
  children: React.ReactNode;
  href: string;
  newWindow: boolean;
}) {
  return (
    <a
      href={href}
      className={styles.btn}
      target={newWindow ? "_blank" : "_self"}>
      <span>{children}</span>
    </a>
  );
}
