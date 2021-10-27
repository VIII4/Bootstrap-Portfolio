import React, { useState } from "react";
//import styles from "./fullscreenOverlay.module.css";

// Elements

export default function fullscreenOverlay({ children }) {
  return (
    <div className="mask rgba-black-light d-flex justify-content-center">
      {children}
    </div>
  );
}
