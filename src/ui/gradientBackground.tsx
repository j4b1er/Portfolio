"use client";

import styles from "@/ui/gradientBackground.module.css";
import { useRef } from "react";

export default function GradientBackground() {
  //   function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {}

  //   function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
  //     const mouseX = e.clientX;
  //     const mouseY = e.clientY;

  //     document.documentElement.style.setProperty("--mouseX", `${mouseX}px`);
  //     document.documentElement.style.setProperty("--mouseY", `${mouseY}px`);
  //   }

  return (
    <div
      className={styles.homeBackground}
      onMouseMove={() => console.log("a")}></div>
  );
}
