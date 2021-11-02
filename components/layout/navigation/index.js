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

import {
  ScrollTo,
  IsMobileCheck,
  CheckInView,
  AnimateCSS,
} from "../../../utilities/app";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  //const [isSolid, setIsSolid] = useState(false);

  let isSolid = false;

  const scrollCheck = (element, navBar) => {
    if (!isSolid) {
      if (window.scrollY >= element.scrollHeight / 3) {
        isSolid = true;
        navBar.classList.add("top-nav-collapse");
      }
    } else {
      if (window.scrollY < element.scrollHeight / 3) {
        //
        isSolid = false;
        navBar.classList.remove("top-nav-collapse");
        //console.log("now is not Solid");
      }
    }
  };

  const animateInView = (trigger) => {
    // for each trigger elemenet check if its in view
    for (let i = 0; i < trigger.length; i++) {
      let options = {
        fullVisibility: true,
        infinite: false,
      };

      CheckInView(trigger[i], options, () => {
        // Check if triggered
        if (trigger[i].dataset.triggered === "true") {
          return;
        }

        // Get all elements with data-to be triggered
        let list = document.querySelectorAll(
          `[data-listTitle='${trigger[i].id}']`
        );

        // ANIMATE LIST HERE
        list.forEach((element, i) => {
          AnimateCSS(element, "animate__fadeInUp", 350 * (i + 1));
        });

        // SET IS TRIGGERED
        trigger[i].dataset.triggered = "true";
      });
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();

    // Get Target element ID from Data attr
    let elementId = e.target.getAttribute("data-scroll");
    ScrollTo(elementId, "scroll-nav");
  };

  useEffect(() => {
    //Get Screen width and check if width is mobile
    let isMobile = IsMobileCheck();

    //// For Nav bar transition /////
    // Get "fullscreen-intro" element
    let fsIntro = document.getElementById("fullscreen-intro");
    // Get Navbar element
    let navBar = document.getElementById("scroll-nav");
    //
    let navTransition = () => {
      if (isMobile) {
        return;
      }
      if (fsIntro) scrollCheck(fsIntro, navBar);
    };

    //// For Skills Animation ////
    // Get skills titles
    let skillsTitles = document.getElementsByClassName("skillTitle");

    //

    const onScroll = () => {
      navTransition();
      animateInView(skillsTitles);
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
