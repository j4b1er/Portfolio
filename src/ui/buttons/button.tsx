"use client";

import { useEffect, useState } from "react";
import styles from "./button.module.css";

export default function Button({
  // children,
  href,
  chatChildren,
}: {
  // children: React.ReactNode;
  href: string;
  chatChildren: React.ReactNode;
}) {
  const [chatOpen, setChatOpen] = useState(false);
  const spanContent = chatOpen ? "Close chat" : "Open chat";

  useEffect(() => {
    if (chatOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Element;
        if (!target.closest("#chat")) {
          setChatOpen((value) => !value);
        }
      };
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [chatOpen, setChatOpen]);

  function handleChatOpen(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setChatOpen((status) => !status);
  }

  return (
    <>
      <a href={href} className={styles.btn} onClick={handleChatOpen}>
        <span>{spanContent}</span>
      </a>
      {chatOpen && chatChildren}
    </>
  );
}
