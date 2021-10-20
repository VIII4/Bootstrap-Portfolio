// Modules
import React, { useState } from "react";

// Styles
import styles from "./contactForm.module.css";

// Elements
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBInputGroupText,
  MDBValidation,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

// Blocks

export function ContactForm(props) {
  return (
    <MDBContainer id="contact-wrapper" fluid className={styles.contactWrapper}>
      <MDBRow>{/* Form Header */}</MDBRow>
      <MDBRow>
        {/* Form  */}
        <MDBCol>
          <form
            id="page-contact-form"
            action="https://formspree.io/myynleoo"
            method="POST"
          >
            {/* Name */}
            <MDBRow center className={styles.formRow}>
              <MDBCol center size="2" className="text-center">
                <MDBIcon fas size="lg" icon="user" />
              </MDBCol>
              <MDBCol size="10">
                <MDBInput
                  type="text"
                  id="page-name"
                  name="name"
                  label="Name"
                  class="form-control validate"
                />
              </MDBCol>
            </MDBRow>
            {/* Email */}
            <MDBRow center className={styles.formRow}>
              <MDBCol center size="2" className="text-center">
                <MDBIcon fas size="lg" icon="envelope" />
              </MDBCol>
              <MDBCol size="10">
                <MDBInput
                  type="email"
                  id="page-email"
                  name="_replyto"
                  label="Email"
                  class="form-control validate"
                />
              </MDBCol>
            </MDBRow>
            {/* Subject  */}
            <MDBRow center className={styles.formRow}>
              <MDBCol center size="2" className="text-center">
                <MDBIcon fas size="lg" icon="tag" />
              </MDBCol>
              <MDBCol size="10">
                <MDBInput
                  type="text"
                  id="page-subject"
                  name="subject"
                  label="Subject"
                  class="form-control validate"
                />
              </MDBCol>
            </MDBRow>
            {/* Message */}
            <MDBRow end className={styles.formRow}>
              <MDBCol size="10">
                <MDBInput
                  type="text"
                  id="page-message"
                  textarea
                  class="md-textarea form-control"
                  name="message"
                  label="Message"
                  rows={5}
                />
              </MDBCol>
            </MDBRow>
            {/* Button */}
            <MDBRow start className="mx-1">
              <MDBCol size="2">
                <MDBBtn color="dark">Send</MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

{
  /* <div class="row pb-3">
                <div class="col">
                  <h3 id="contentTitle" class="m-2">Contact</h3>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <form
                    id="page-contact-form"
                    action="https://formspree.io/myynleoo"
                    method="POST"
                  >
                    <div class="md-form mb-5">
                      <i class="fas fa-user prefix grey-text"></i>
                      <input
                        type="text"
                        id="page-name"
                        name="name"
                        class="form-control validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="form34"
                        >Your name</label
                      >
                    </div>

                    <div class="md-form mb-5">
                      <i class="fas fa-envelope prefix grey-text"></i>
                      <input
                        type="email"
                        id="page-email"
                        name="_replyto"
                        class="form-control validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="form29"
                        >Your email</label
                      >
                    </div>

                    <div class="md-form mb-5">
                      <i class="fas fa-tag prefix grey-text"></i>
                      <input
                        type="text"
                        id="page-subject"
                        name="subject"
                        class="form-control validate"
                      />
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="form32"
                        >Subject</label
                      >
                    </div>

                    <div class="md-form">
                      <i class="fas fa-pencil prefix grey-text"></i>
                      <textarea
                        type="text"
                        id="page-message"
                        class="md-textarea form-control"
                        name="message"
                        rows="4"
                      ></textarea>
                      <label data-error="wrong" data-success="right" for="form8"
                        >Your message</label
                      >
                    </div>
                    <button
                      type="button"
                      data-formtype="page"
                      class="btn btn-dark rounded btn-project btn-contact"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div> */
}
