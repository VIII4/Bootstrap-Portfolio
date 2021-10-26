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
import Link from "next/link";
import styles from "./navigation.module.css";

import { ScrollTo } from "../../../utilities/app";

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

  const screenSizeCheck = (width) => {
    return width > "768" ? false : true;
  };

  const handleNavClick = (e) => {
    e.preventDefault();

    // Get Target element ID from Data attr
    let elementId = e.target.getAttribute("data-scroll");
    ScrollTo(elementId, "scroll-nav");
  };

  // TO DO: ADD ON CLICK SCROLL TO HANDLERS
  // Get Document element and bottom of full screen

  useEffect(() => {
    //Get Screen width and check if width is mobile
    let isMobile = screenSizeCheck(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );

    // Get "fullscreen-intro" element
    let fsIntro = document.getElementById("fullscreen-intro");
    // Get Navbar element
    let navBar = document.getElementById("scroll-nav");

    if (window) {
      window.addEventListener("scroll", () => {
        if (isMobile) {
          return;
        }
        scrollCheck(fsIntro, navBar);
      });
      window.addEventListener("resize", () => {
        //
        isMobile = screenSizeCheck(
          window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        );
      });
    }

    return () => {
      if (window) {
        window.removeEventListener("scroll", () => {
          if (isMobile) {
            return;
          }
          scrollCheck(fsIntro, navBar);
        });
        window.addEventListener("resize", () => {
          //
          isMobile = screenSizeCheck(
            window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth
          );
        });
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
