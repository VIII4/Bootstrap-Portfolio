// Modules
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// Styles
import styles from "./contactForm.module.css";

// Elements
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBTypography,
  MDBInput,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBInputGroupText,
  MDBValidation,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

// Blocks

export function ContactForm({ modal }) {
  const [state, handleSubmit] = useForm("myynleoo");

  const resetForm = () => {
    setTimeout(function () {
      handleSubmit((state.succeeded = false));
    }, 3500);
  };

  if (state.succeeded) {
    resetForm();
    return (
      <MDBRow center middle className={styles.confirmMessage}>
        <MDBCol center className="text-center">
          <MDBTypography tag="h4">Message Sent</MDBTypography>
          <MDBIcon
            far
            size="5x"
            icon="envelope"
            className="animate__animated animate__bounceOutRight"
          />
        </MDBCol>
      </MDBRow>
    );
  }

  return (
    <>
      {!modal && (
        <MDBRow className="m-2 p-1">
          <MDBCol size="12">
            <MDBTypography tag="h2" colorText="dark text-center">
              Reach Out
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      )}

      {modal && (
        <MDBRow className="m-2 p-1">
          <MDBCol size="12">
            <MDBTypography tag="h6" colorText="dark" className="">
              Interested in collaborating or want to discuss work and or
              partnership opportunities? Lets Talk!
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      )}

      <MDBRow className="my-2 p-1">
        {/* Form  */}
        <MDBCol>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <MDBRow center className={styles.formRow}>
              <MDBCol center size="1" className="text-center">
                <MDBIcon fas size="lg" icon="user" />
              </MDBCol>
              <MDBCol size="10">
                <MDBInput
                  type="text"
                  id="page-name"
                  name="name"
                  label="Name"
                  required
                />
              </MDBCol>
            </MDBRow>
            {/* Email */}
            <MDBRow center className={styles.formRow}>
              <MDBCol center size="1" className="text-center">
                <MDBIcon fas size="lg" icon="envelope" />
              </MDBCol>
              <MDBCol size="10">
                <MDBInput
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </MDBCol>
            </MDBRow>
            {/* Subject  */}
            <MDBRow center className={styles.formRow}>
              <MDBCol center size="1" className="text-center">
                <MDBIcon fas size="lg" icon="tag" />
              </MDBCol>
              <MDBCol size="10">
                <MDBInput
                  type="text"
                  id="subject"
                  name="subject"
                  label="Subject"
                />
              </MDBCol>
            </MDBRow>
            {/* Message */}
            <MDBRow center className={styles.formRow}>
              <MDBCol size="11">
                <MDBInput
                  type="text"
                  id="message"
                  textarea
                  name="message"
                  label="Message"
                  rows={5}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </MDBCol>
            </MDBRow>
            {/* Button */}
            <MDBRow start className="mx-1 px-1">
              <MDBCol size="2">
                <MDBBtn color="dark" type="submit" disabled={state.submitting}>
                  Send
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mx-3 mt-2">
        <MDBCol size="12">
          <MDBTypography tag="p" className="text-muted">
            I'll respond to your message within 2 business days.
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </>
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
