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
  const [chatMounted, setChatMounted] = useState(false);
  const spanContent = chatOpen ? "Close chat" : "Open chat";

  useEffect(() => {
    console.log("go");
    const chat = document.querySelector("#chat");
    if (chatOpen) {
      setChatMounted(true);
      chat?.classList.add("chat-animation");
      chat?.addEventListener("animationend", () => {
        chat?.classList.remove("chat-animation");
      });

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
    } else {
      chat?.classList.add("chat-animation-out");
      chat?.addEventListener("animationend", () => {
        setChatMounted(false);
      });
    }
  }, [chatOpen, setChatOpen, chatMounted, setChatMounted]);

  function handleChatOpen(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setChatOpen((status) => !status);
  }

  return (
    <>
      <a href={href} className={styles.btn} onClick={handleChatOpen}>
        <span>{spanContent}</span>
      </a>
      {chatMounted && chatChildren}
    </>
  );
}
