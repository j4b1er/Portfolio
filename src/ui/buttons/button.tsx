"use client";

import { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     if (!e.target.closest(".modal")) {
  //     }
  //   });
  // }, []);

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
