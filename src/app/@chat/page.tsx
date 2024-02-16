"use client";

import styles from "@/app/@chat/page.module.css";
import { useState } from "react";

export default function ChatPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMount, setChatMount] = useState(false);

  function handleChatOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setChatOpen((status) => !status);
    if (!chatMount) setChatMount(true);
  }

  function handleAnimation(e: React.AnimationEvent<HTMLDivElement>) {
    if (!chatOpen) setChatMount(false);
  }

  return (
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
          pharetra pharetra massa massa ultricies mi. Vivamus at augue eget arcu
          dictum varius. Lacinia quis vel eros donec ac odio tempor orci
          dapibus. Nec feugiat nisl pretium fusce. At volutpat diam ut venenatis
          tellus. Diam sollicitudin tempor id eu nisl. Tellus orci ac auctor
          augue mauris augue neque gravida in. Pretium aenean pharetra magna ac
          placerat vestibulum lectus mauris ultrices. Sed cras ornare arcu dui
          vivamus arcu felis bibendum. Commodo ullamcorper a lacus vestibulum
          sed arcu non. Gravida dictum fusce ut placerat orci nulla
          pellentesque. Sit amet porttitor eget dolor morbi non. Pharetra et
          ultrices neque ornare aenean euismod elementum. Duis at consectetur
          lorem donec massa sapien faucibus. Nulla pharetra diam sit amet.
          Mattis rhoncus urna neque viverra justo nec ultrices. Eget arcu dictum
          varius duis at consectetur lorem donec massa. Lacus luctus accumsan
          tortor posuere ac ut consequat semper. Augue ut lectus arcu bibendum
          at varius vel. Consequat nisl vel pretium lectus quam. Mattis molestie
          a iaculis at erat. Nisl tincidunt eget nullam non nisi est sit amet.
          Vestibulum morbi blandit cursus risus at ultrices mi tempus. Nunc non
          blandit massa enim nec dui. Sed lectus vestibulum mattis ullamcorper
          velit sed ullamcorper morbi tincidunt. Nunc aliquet bibendum enim
          facilisis gravida neque convallis a. Morbi blandit cursus risus at.
          Eget dolor morbi non arcu risus quis. In tellus integer feugiat
          scelerisque varius morbi enim nunc. Facilisi morbi tempus iaculis urna
          id volutpat lacus laoreet non. Adipiscing diam donec adipiscing
          tristique. Malesuada nunc vel risus commodo viverra maecenas accumsan
          lacus vel. Amet consectetur adipiscing elit ut aliquam. Nisl
          condimentum id venenatis a condimentum vitae sapien. Sapien faucibus
          et molestie ac. Massa sed elementum tempus egestas. At auctor urna
          nunc id cursus metus aliquam eleifend. Venenatis lectus magna
          fringilla urna. Tellus in hac habitasse platea dictumst vestibulum
          rhoncus est pellentesque. Sit amet consectetur adipiscing elit
          pellentesque habitant. Massa vitae tortor condimentum lacinia quis
          vel. Mattis aliquam faucibus purus in massa tempor. Sem nulla pharetra
          diam sit amet. At auctor urna nunc id. Ullamcorper velit sed
          ullamcorper morbi tincidunt. Elit duis tristique sollicitudin nibh sit
          amet commodo nulla. Maecenas ultricies mi eget mauris pharetra. Eget
          magna fermentum iaculis eu non diam phasellus vestibulum. Neque
          volutpat ac tincidunt vitae semper quis lectus. Sagittis eu volutpat
          odio facilisis mauris sit amet massa. Vitae tortor condimentum lacinia
          quis vel eros. Et netus et malesuada fames ac turpis egestas maecenas.
          Egestas fringilla phasellus faucibus scelerisque. Sapien et ligula
          ullamcorper malesuada proin libero. Egestas purus viverra accumsan in.
          Quam viverra orci sagittis eu. Rutrum quisque non tellus orci ac
          auctor. Posuere sollicitudin aliquam ultrices sagittis. Maecenas
          accumsan lacus vel facilisis volutpat. Pulvinar etiam non quam lacus
          suspendisse faucibus interdum posuere. Rhoncus dolor purus non enim
          praesent. Ac tortor vitae purus faucibus ornare suspendisse sed nisi.
          Viverra suspendisse potenti nullam ac tortor. Consectetur adipiscing
          elit pellentesque habitant. Adipiscing elit duis tristique
          sollicitudin nibh sit amet commodo. Amet luctus venenatis lectus
          magna. Odio ut enim blandit volutpat maecenas. Nec nam aliquam sem et.
          Dui id ornare arcu odio ut sem nulla pharetra diam. Sodales neque
          sodales ut etiam sit. Feugiat sed lectus vestibulum mattis ullamcorper
          velit sed ullamcorper. Amet tellus cras adipiscing enim eu turpis.
          Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Sed
          arcu non odio euismod. Posuere morbi leo urna molestie at elementum
          eu. Turpis tincidunt id aliquet risus feugiat in ante metus. Nunc
          consequat interdum varius sit. A diam sollicitudin tempor id eu nisl
          nunc mi ipsum.
        </div>
      )}
    </div>
  );
}
