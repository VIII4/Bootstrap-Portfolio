import React from "react";
import { MDBIcon, MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <MDBFooter
      tag="footer"
      bgColor="dark"
      color="light"
      className="text-center"
    >
      <MDBContainer fluid className="p-3">
        <a href="https://github.com/VIII4" target="_blank" className="p-1 mx-2">
          <MDBIcon color="light" size="3x" fab icon="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/iyanlaylor"
          target="_blank"
          className="p-1 mx-2"
        >
          <MDBIcon color="light" size="3x" fab icon="linkedin" />
        </a>

        <a
          href="https://stackoverflow.com/users/12654186/"
          target="_blank"
          className="p-1 mx-2"
        >
          <MDBIcon color="light" size="3x" fab icon="stack-overflow" />
        </a>

        <a href="" target="_blank" className="p-1 mx-2">
          <MDBIcon color="light" size="3x" fab icon="codepen" />
        </a>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        {/* &copy; {new Date().getFullYear()} Copyright:{" "} */}
        <a className="text-light" href="https://mdbootstrap.com/">
          Iyan Laylor Full Stack Developer Portfolio 2021
        </a>
      </div>
    </MDBFooter>
  );
}
