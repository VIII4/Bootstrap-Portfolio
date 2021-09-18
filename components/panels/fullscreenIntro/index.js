import { MDBContainer } from "mdb-react-ui-kit";
import React, { useState } from "react";
import styles from "./fullscreenIntro.module.css";

// Elements

import FullscreenVideo from "../../elements/fullscreenVideo";
import FullscreenOverlay from "../../elements/fullscreenOverlay";
import FullscreenDisplayText from "../../elements/fullscreenDisplayText";
import FullscreenIconCanvas from "../../elements/fullscreenIconCanvas";

export default function FullScreenIntro(props) {
  // TO DO: HANDLE MODAL
  const handleContactClick = () => {
    // alert("test");
  };

  return (
    <div className={`${styles.view}`}>
      <FullscreenVideo />
      <FullscreenOverlay>
        <FullscreenDisplayText />
        <FullscreenIconCanvas handleContactClick={handleContactClick} />
      </FullscreenOverlay>
    </div>
  );
}

// <!-- Full Page Intro -->
//     <div class="view scr-view d-none d-lg-block">
//       <video
//         class="video-intro"
//         poster="assets/images/background-still/underwaterBGStill.jpg"
//         playsinline
//         autoplay
//         muted
//         loop
//       >
//         <source src="assets/videos/underwaterBG.mp4" type="video/mp4" />
//       </video>

//       <!-- Mask & flexbox options-->
//       <div class="mask rgba-black-light d-flex justify-content-center">
//         <div
//           id="my-toast"
//           class="toast"
//           data-delay="1500"
//           style="position: absolute; top: 1.5rem; right: 1.5rem; z-index: 1032"
//         >
//           <div class="card rounded success-color">
//             <div class="card-body text-light">
//               <h5 class="card-title p-0 m-0">Message Sent</h5>
//             </div>
//           </div>
//         </div>
//         <!-- Particles -->
//         <div id="particles-js"></div>

//         <!-- Notification -->

//         <div id="canvas-social" class="canvas-overlay align-self-end">
//           <ul class="social-list">
//             <li class="social-list-item">
//               <a href="https://github.com/VIII4" target="_blank">
//                 <i class="fab fa-github fa-3x fa-social-list"></i>
//               </a>
//             </li>
//             <li class="social-list-item">
//               <a href="https://www.linkedin.com/in/iyanlaylor" target="_blank"
//                 ><i class="fab fa-linkedin fa-3x fa-social-list"></i
//               ></a>
//             </li>
//             <li class="social-list-item">
//               <a
//                 href="https://stackoverflow.com/users/12654186/"
//                 target="_blank"
//                 ><i class="fab fa-stack-overflow fa-3x fa-social-list"></i
//               ></a>
//             </li>
//             <li class="social-list-item">
//               <a href="https://codepen.io/viii4" target="_blank">
//                 <i class="fab fa-codepen fa-3x fa-social-list"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div class="align-self-center text-center mx-auto w-75">
//           <h1 class="display-3 text-white cover-text">Web || XR || Native</h1>
//           <hr class="white" />
//           <h5 class="text-muted cover-subtext">
//             Full Stack Developer and Interactive Content Designer
//           </h5>
//         </div>
//         <div class="canvas-overlay align-self-end">
//           <span id="canvas-contact" class="mx-auto mb-3 social-list-item">
//             <a
//               href=""
//               target="_blank"
//               data-toggle="modal"
//               data-target="#contactFormModal"
//             >
//               <i class="far fa-comment-alt fa-3x fa-social-list"></i>
//             </a>
//           </span>
//         </div>

//         <!-- Content -->
//       </div>
//       <!-- Mask & flexbox options-->
//     </div>
//     <!-- ./ Full Page Intro -->
