import React from "react";
import styles from "./fullscreenVideo.module.css";

export default function FullScreenVideo(props) {
  return (
    <video
      className={`${styles.videoIntro}`}
      poster="/images/webP_images/underwaterBGStill.jpg"
      autoPlay
      muted
      loop
    >
      <source
        src="https://res.cloudinary.com/darv9txct/video/upload/v1631854829/il-portfolio/underwaterBG_i7lmlt.mp4"
        type="video/mp4"
      />
    </video>
  );
}
