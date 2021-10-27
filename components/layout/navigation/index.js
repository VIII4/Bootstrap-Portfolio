import React, { useEffect, useState } from "react";
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
//import styles from "./navigation.module.css";

import { ScrollTo, IsMobileCheck } from "../../../utilities/app";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  //const [isSolid, setIsSolid] = useState(false);

  let isSolid = false;

  const scrollCheck = (element, navBar) => {
    //console.log(window.scrollY, element.scrollHeight, navBar.scrollHeight);
    if (!isSolid) {
      if (window.scrollY >= element.scrollHeight - navBar.scrollHeight) {
        isSolid = true;
        navBar.classList.add("top-nav-collapse");
        //console.log("now Solid");
      }
    } else {
      if (window.scrollY < element.scrollHeight - navBar.scrollHeight) {
        //
        isSolid = false;
        navBar.classList.remove("top-nav-collapse");
        //console.log("now is not Solid");
      }
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();

    // Get Target element ID from Data attr
    let elementId = e.target.getAttribute("data-scroll");
    ScrollTo(elementId, "scroll-nav");
  };

  /*
    ERROR: when screen resizes loses reference to element 

    Fix: 
  */

  useEffect(() => {
    //Get Screen width and check if width is mobile
    let isMobile = IsMobileCheck();
    // Get "fullscreen-intro" element
    let fsIntro = document.getElementById("fullscreen-intro");
    // Get Navbar element
    let navBar = document.getElementById("scroll-nav");

    const onScroll = () => {
      if (isMobile) {
        return;
      }
      if (fsIntro) scrollCheck(fsIntro, navBar);
    };

    const onResize = () => {
      isMobile = IsMobileCheck();
      // Get "fullscreen-intro" element
      fsIntro = document.getElementById("fullscreen-intro");
      // Get Navbar element
      navBar = document.getElementById("scroll-nav");
    };

    if (window) {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onResize);
    }

    return () => {
      if (window) {
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);
      }
    };
  });

  return (
    <>
      <MDBNavbar
        id="scroll-nav"
        dark={!isSolid}
        expand="lg"
        className="fixed-top "
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
                <MDBNavbarLink
                  active
                  className="nav-link"
                  data-scroll="about-content"
                  onClick={handleNavClick}
                  aria-current="page"
                  href="#"
                >
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  className="nav-link"
                  data-scroll="portfolio-content"
                  onClick={handleNavClick}
                  aria-current="page"
                  href="#"
                >
                  Portfolio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  className="nav-link"
                  data-scroll="contact-content"
                  onClick={handleNavClick}
                  aria-current="page"
                  href="#"
                >
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
