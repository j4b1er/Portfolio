"use client";

import styles from "@/app/@chat/page.module.css";
import { useEffect, useRef, useState } from "react";
import { sendQuestion } from "./actions";

interface Message {
  id: string;
  text: string;
  owner: "user" | "bot";
}

export default function ChatPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMount, setChatMount] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Ask me a question.",
      owner: "bot",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.scrollTop =
        contentElement.scrollHeight - contentElement.clientHeight;
    }
  }, [messages, chatMount]);

  function handleChatOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setChatOpen((status) => !status);
    if (!chatMount) setChatMount(true);
  }

  function handleAnimation(e: React.AnimationEvent<HTMLDivElement>) {
    if (!chatOpen) setChatMount(false);
  }

  // async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    // const formData = new FormData(e.target);

    setIsLoading(true);
    setQuestion("");
    setMessages((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        // text: formData.get("question") as string,
        text: question,
        owner: "user",
      })
    );

    const answer = await sendQuestion(question);

    setIsLoading(false);
    setMessages((messages) =>
      messages.concat({
        id: Math.random().toString(36).slice(2),
        text: answer,
        owner: "bot",
      })
    );
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chat}>
        <div
          className={`${styles.chat__header} ${
            chatOpen && styles.halfRoundedCorners
          }`}
          onClick={handleChatOpen}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
            </svg>
            Let&apos;s Chat
          </span>
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
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${
                    message.owner === "bot"
                      ? styles.chat__body___contentResponse
                      : styles.chat__body___contentQuestion
                  }`}>
                  {message.text}
                </div>
              ))}
              {isLoading && (
                <div
                  className={`${styles.chat__body___contentResponse} ${styles.chat__body___loadingResponse} `}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
            <form
              className={styles.chat__body___footer}
              onSubmit={handleSubmit}
              autoComplete="off">
              <input
                type="text"
                name="question"
                placeholder="Ask me a question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button disabled={isLoading}>
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
