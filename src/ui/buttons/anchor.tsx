import styles from "@/ui/buttons/anchor.module.css";

export default function SimpleArchon({
  children,
  href,
  hoverStatus,
}: {
  children: React.ReactNode;
  href: string;
  hoverStatus: boolean;
}) {
  return (
    <a
      href={href}
      className={`${styles.anchorGeneral} ${hoverStatus ? "text-black" : ""}`}
      target="_blank">
      {children}
    </a>
  );
}
