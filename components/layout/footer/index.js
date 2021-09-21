import React from "react";
import { MDBIcon, MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import styles from "./footer.module.css";

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
          <MDBIcon color="light" size="3x" fab icon="github" />
        </a>

        <a href="https://www.linkedin.com/in/iyanlaylor" className="p-1 mx-2">
          <MDBIcon color="light" size="3x" fab icon="linkedin" />
        </a>

        <a
          href="https://stackoverflow.com/users/12654186/"
          className="p-1 mx-2"
        >
          <MDBIcon color="light" size="3x" fab icon="stack-overflow" />
        </a>

        <a href="" className="p-1 mx-2">
          <MDBIcon color="light" size="3x" fab icon="codepen" />
        </a>
      </MDBContainer>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <span className="text-light">Crafted by Iyan Laylor </span>
        &copy; {new Date().getFullYear()}{" "}
      </div>
      <div className="text-center my-1">
        <span className="text-light"> Made with: React </span>
        <MDBIcon fab size="lg" icon="react" />
        <span className="text-light"> , Next.js, and MDB </span>
      </div>
    </MDBFooter>
  );
}
