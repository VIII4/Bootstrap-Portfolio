import React from "react";
//import styles from "./bioPanel.module.css";

export function BioPanel({ children }) {
  return (
    <>
      <div style={{ backgroundColor: "white", height: "75vh", zIndex: "-1" }}>
        {children}
      </div>
      <div
        style={{ backgroundColor: "blue", height: "75vh", zIndex: "-1" }}
      ></div>

      {/*
            Need to create a two toned background that will sever a
    
        */}
    </>
  );
}
