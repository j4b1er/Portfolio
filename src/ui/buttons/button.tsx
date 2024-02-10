"use client";

import { useState } from "react";
import styles from "./button.module.css";

export default function Button({
  children,
  href,
  chatChildren,
}: {
  children: React.ReactNode;
  href: string;
  chatChildren: React.ReactNode;
}) {
  const [chatOpen, setChatOpen] = useState(false);

  function handleChatOpen(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setChatOpen((status) => !status);
  }

  return (
    <>
      <a href={href} className={styles.btn} onClick={handleChatOpen}>
        {children}
      </a>
      {chatOpen && chatChildren}
    </>
  );
}
