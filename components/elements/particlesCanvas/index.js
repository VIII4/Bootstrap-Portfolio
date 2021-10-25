import React from "react";
import Dynamic from "next/dynamic";

import styles from "./particlesCanvas.module.css";

const ParticlesRender = Dynamic(() => import("../particlesRender"), {
  ssr: false,
});

export default function ParticlesCanvas(props) {
  const canvasId = "particles-js";

  const params = {
    _particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
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
            src: "/images/particles/bubbleSheetC.png",
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
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 28,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
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
          enable: true,
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
          distance: 150,
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

  return (
    <div id={canvasId} className={styles.particlesJs}>
      <ParticlesRender canvasId={canvasId} _params={params} />
    </div>
  );
}
