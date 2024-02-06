"use client";

import styles from "@/ui/gradientBackground.module.css";
import { useEffect } from "react";

export default function GradientBackground() {
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const mouseX = e.x;
      const mouseY = e.y;
      document.documentElement.style.setProperty("--x-grid", `${mouseX}px`);
      document.documentElement.style.setProperty("--y-grid", `${mouseY}px`);
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className={styles.homeBackground}></div>;
}
