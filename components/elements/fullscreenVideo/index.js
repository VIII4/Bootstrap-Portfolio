import React from "react";
import styles from "./fullscreenVideo.module.css";

export default function FullScreenVideo(props) {
  return (
    <video
      className={`${styles.videoIntro}`}
      poster="/images/background-still/underwaterBGStill.jpg"
      playsInline
      autoPlay
      muted
      loop
    >
      <source src="/videos/underwaterBG.mp4" type="video/mp4" />
    </video>
  );
}
