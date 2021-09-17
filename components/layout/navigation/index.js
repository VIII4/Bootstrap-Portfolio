import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  // TO DO: ADD ON CLICK SCROLL TO HANDLERS

  return (
    <>
      <MDBNavbar
        expand="lg"
        dark
        bgColor="dark"
        className="p-2 fixed-top scrolling-navbar"
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" className="ml-md-5">
            Iyan Laylor
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <Link active aria-current="page" href="#">
                  <a className="nav-link">About</a>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link active aria-current="page" href="#">
                  <a className="nav-link">Portfolio</a>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link active aria-current="page" href="#">
                  <a className="nav-link">Contact</a>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
