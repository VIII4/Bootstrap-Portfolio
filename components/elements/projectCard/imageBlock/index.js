import React from "react";
import Image from "next/image";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import styles from "./imageBlock.module.css";

/**
 * @name ImageBlock
 * @description Image Block for projects, layered image and frame base on project type
 * @param {string} type type of project for image frame
 * @param {string} imgSrc img src
 *
 */
export default function ImageBlock({ imgSrc }) {
  //TO DO: Add slide animation class
  return (
    <MDBRow middle className="text-center ">
      {imgSrc && <img className="p-2" src={imgSrc} alt="test" />}
    </MDBRow>
  );
}
