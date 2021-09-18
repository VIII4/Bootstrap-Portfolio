import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import styles from "./mobileBanner.module.css";

export default function MobileBanner(props) {
  return (
    <MDBRow className={`${styles.mobileBanner} bg-dark d-flex d-md-none p-1`}>
      <MDBCol>
        <MDBRow>
          <MDBTypography
            tag="h2"
            className={`${styles.bannerText} h2-responsive text-white text-center `}
          >
            Web || XR || Native
          </MDBTypography>
        </MDBRow>
        <MDBRow>
          <MDBTypography
            tag="p"
            className={`${styles.bannerSubtext} text-muted text-center `}
          >
            Full Stack Developer and Interactive Content Designer
          </MDBTypography>
        </MDBRow>
        <MDBRow className="text-center my-2">
          <MDBCol>
            <a href="https://github.com/VIII4" className=" mx-3">
              <MDBIcon color="light" size="2x" fab icon="github" />
            </a>
            <a href="https://www.linkedin.com/in/iyanlaylor" className="mx-3">
              <MDBIcon color="light" size="2x" fab icon="linkedin" />
            </a>
            <a
              href="https://stackoverflow.com/users/12654186/"
              className=" mx-3"
            >
              <MDBIcon color="light" size="2x" fab icon="stack-overflow" />
            </a>
            <a href="https://codepen.io/viii4" className=" mx-3">
              <MDBIcon color="light" size="2x" fab icon="codepen" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
}

{
  /* <div class="row bg-dark p-3 mobile-banner d-block d-lg-none">
        <div class="col no-gutters m-0 p-0 mt-2">
          <div class="row no-gutters">
            <h1
              class="
                h1-responsive
                text-center text-white text-wrap
                banner-text
                my-3
                mx-auto
              "
            >
              WEB || XR || NATIVE
            </h1>
          </div>
          <div class="row no-gutters">
            <p class="text-muted text-center banner-subtext">
              Full Stack Developer and Interactive Content Designer
            </p>
          </div>
          <div class="row no-gutters text-center mt-2">
            <div class="col">
              <span class="banner-link"
                ><a href="https://github.com/VIII4" target="_blank">
                  <i class="fab fa-github fa-2x fa-social-list"></i> </a
              ></span>
              <span class="banner-link"
                ><a
                  href="https://www.linkedin.com/in/iyanlaylor"
                  target="_blank"
                  ><i class="fab fa-linkedin fa-2x fa-social-list"></i></a
              ></span>
              <span class="banner-link"
                ><a
                  href="https://stackoverflow.com/users/12654186/"
                  target="_blank"
                  ><i class="fab fa-stack-overflow fa-2x fa-social-list"></i></a
              ></span>
              <span class="banner-link"
                ><a href="https://codepen.io/viii4" target="_blank">
                  <i class="fab fa-codepen fa-2x fa-social-list"></i> </a
              ></span>
            </div>

            
          </div>
        </div>
      </div> */
}
