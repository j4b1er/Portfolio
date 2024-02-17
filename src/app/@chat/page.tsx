"use client";

import styles from "@/app/@chat/page.module.css";
import { useEffect, useRef, useState } from "react";

export default function ChatPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMount, setChatMount] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.scrollTop =
        contentElement.scrollHeight - contentElement.clientHeight;
    }
  }, [chatMount]);

  function handleChatOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setChatOpen((status) => !status);
    if (!chatMount) setChatMount(true);
  }

  function handleAnimation(e: React.AnimationEvent<HTMLDivElement>) {
    if (!chatOpen) setChatMount(false);
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chat}>
        <div
          className={`${styles.chat__header} ${
            chatOpen && styles.halfRoundedCorners
          }`}
          onClick={handleChatOpen}>
          <span>Let&apos;s Chat</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className={chatOpen ? styles.rotateSVG : ""}>
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </div>
        {chatMount && (
          <div
            className={`${styles.chat__body} ${
              chatOpen ? styles.showChat : styles.hideChat
            }`}
            onAnimationEnd={handleAnimation}>
            <div className={styles.chat__body___content} ref={contentRef}>
              <div className={styles.chat__body___contentResponse}>Hello</div>
              <div className={styles.chat__body___contentQuestion}>Hi</div>
              <div className={styles.chat__body___contentResponse}>
                How are you?
              </div>
              <div className={styles.chat__body___contentQuestion}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Faucibus turpis in eu mi bibendum neque egestas. Rhoncus dolor
                purus non enim praesent elementum. Scelerisque felis imperdiet
                proin fermentum leo vel.
              </div>
            </div>
            <form className={styles.chat__body___footer}>
              <input type="text" placeholder="Ask me a question..." />
              <button>
                <span className="sr-only">Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
