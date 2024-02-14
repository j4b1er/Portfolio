"use client";

import { useEffect, useState } from "react";
import styles from "./button.module.css";

export default function ChatButton({
  // children,
  // href,
  chatChildren,
}: {
  // children: React.ReactNode;
  // href: string;
  chatChildren: React.ReactNode;
}) {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMounted, setChatMounted] = useState(false);
  const spanContent = chatOpen ? "Close chat" : "Let's chat";

  useEffect(() => {
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

  // function handleChatOpen(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  function handleChatOpen(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setChatOpen((status) => !status);
  }

  return (
    <>
      <button className={styles.btn} onClick={handleChatOpen}>
        <span>{spanContent}</span>
      </button>
      {chatMounted && chatChildren}
    </>
  );
}
