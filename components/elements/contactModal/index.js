import React, { useState } from "react";

import { ContactForm } from "..";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTypography,
} from "mdb-react-ui-kit";
import styles from "./contactModal.module.css";

export default function ContactModal({ showModal, closeModal }) {
  return (
    <>
      <MDBModal show={showModal} animationDirection="left">
        <MDBModalDialog centered className="modal-side modal-bottom-right">
          <MDBModalContent>
            <MDBModalBody>
              <ContactForm modal />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn outline color="dark" onClick={closeModal}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
