import React from "react";
import { MDBIcon, MDBFooter, MDBContainer } from "mdb-react-ui-kit";
//import styles from "./footer.module.css";

export default function Footer() {
  return (
    <MDBFooter
      tag="footer"
      bgColor="dark"
      color="light"
      className="text-center p-5"
    >
      <MDBContainer fluid className="p-2 my-2">
        <a href="https://github.com/VIII4" className="p-1 mx-2">
          <MDBIcon color="light" size="2x" fab icon="github" />
          <span className="visually-hidden">Git Hub</span>
        </a>

        <a href="https://www.linkedin.com/in/iyanlaylor" className="p-1 mx-2">
          <MDBIcon color="light" size="2x" fab icon="linkedin" />
          <span className="visually-hidden">Linkedin</span>
        </a>

        <a
          href="https://stackoverflow.com/users/12654186/"
          className="p-1 mx-2"
        >
          <MDBIcon color="light" size="2x" fab icon="stack-overflow" />
          <span className="visually-hidden">Stack Overflow</span>
        </a>

        <a href="https://codepen.io/viii4" className="p-1 mx-2">
          <MDBIcon color="light" size="2x" fab icon="codepen" />
          <span className="visually-hidden">Code Pen</span>
        </a>
      </MDBContainer>

      <div
        className="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <span className="text-light">Crafted by Iyan Laylor </span>
        &copy; {new Date().getFullYear()}{" "}
      </div>
      <div className="text-center ">
        <span className="text-light text-muted">
          Made with: React.js, Next.js, and MD Bootstrap{" "}
        </span>
      </div>
    </MDBFooter>
  );
}
