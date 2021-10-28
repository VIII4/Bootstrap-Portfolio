import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export function DetailCard({ selectedProject }) {
  //   /const { tech, title, role, duration } = selectedProject;
  return (
    <>
      {selectedProject && (
        <MDBContainer fluid>
          {/*  */}
          <MDBRow>
            <MDBCol>{/*  */}Title:</MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>{/*  */}Role:</MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>{/*  */}Duration:</MDBCol>
          </MDBRow>
          <MDBRow>
            {selectedProject.tech && (
              <>
                <MDBTypography tag="strong" variant="h5">
                  Technologies used:
                </MDBTypography>
                <MDBTypography listInLine className="">
                  {selectedProject.tech.map((t) => {
                    return (
                      <li key="{t}" className="list-inline-item">
                        {t}
                      </li>
                    );
                  })}
                </MDBTypography>
              </>
            )}
          </MDBRow>
          <MDBRow>
            <MDBCol>{/*  */}Bullets:</MDBCol>
          </MDBRow>

          {/*  */}
        </MDBContainer>
      )}
    </>
  );
}
