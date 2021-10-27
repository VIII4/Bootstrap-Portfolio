import React, { useEffect } from "react";

import styles from "./particlesCanvas.module.css";
import ParticlesJS from "../../../utilities/particles/particles";

export default function ParticlesCanvas(props) {
  // ID attr to assign to canvas and reference to draw particles
  const canvasId = "particles-js";
  // Particle Parameters
  const params = {
    _particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "image",
        image: [
          {
            src: "/images/particles/bubbleSheetA.png",
            width: 100,
            height: 100,
            anim: {
              enable: true,
              speed: 6,
              frameWidth: 64,
              totalFrames: 16,
            },
          },
          {
            src: "/images/particles/bubbleSheetC.webp",
            width: 100,
            height: 100,
            anim: {
              enable: true,
              speed: 10,
              frameWidth: 64,
              totalFrames: 12,
            },
          },
        ],
      },
      opacity: {
        value: 0.1,
        random: true,
        anim: {
          enable: false,
        },
      },
      size: {
        value: 28,
        random: true,
        anim: {
          enable: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    _interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 10,
        },
        repulse: {
          distance: 75,
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    _retina_detect: true,
    _config_demo: {
      hide_card: false,
      background_color: "#000000",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  };

  useEffect(() => {
    ParticlesJS(canvasId, params);
  });

  return <div id={canvasId} className={styles.particlesJs}></div>;
}
