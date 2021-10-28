import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export function DetailCard({ selectedProject }) {
  //   /const { tech, title, role, duration, bullets } = selectedProject;
  return (
    <>
      {selectedProject && (
        <MDBContainer fluid className="p-2">
          {/*  */}
          <MDBRow className="mb-1">
            <MDBCol>
              <MDBTypography tag="strong" variant="h2">
                Project: {selectedProject.title}
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-2">
            <MDBTypography tag="strong" variant="h4" className="text-muted ">
              {selectedProject.role}
            </MDBTypography>
          </MDBRow>

          <MDBRow className="mb-1">
            <MDBCol>
              <MDBTypography tag="strong" variant="h5">
                Duration:
              </MDBTypography>
              <MDBTypography tag="strong" variant="h5" className="mx-2">
                {selectedProject.duration}
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBTypography tag="strong" variant="h5">
                Technologies Used:
              </MDBTypography>
              {selectedProject.tech && (
                <MDBTypography variant="p" listInLine>
                  {selectedProject.tech.map((t, i) => {
                    return (
                      <li key="{t}" className="list-inline-item ">
                        {`${t}${
                          i >= selectedProject.tech.length - 1 ? "." : ","
                        }`}
                      </li>
                    );
                  })}
                </MDBTypography>
              )}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <ul>
                {selectedProject.bullets && (
                  <ui>
                    {selectedProject.bullets.map((t) => {
                      return <li key="{t}">{t}</li>;
                    })}
                  </ui>
                )}
              </ul>
            </MDBCol>
          </MDBRow>
          {selectedProject.deployed.active && (
            <MDBRow>
              <MDBCol>
                <MDBBtn
                  tag="a"
                  href={selectedProject.deployed.link}
                  color="link"
                >
                  Check it out
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          )}

          {/*  */}
        </MDBContainer>
      )}
    </>
  );
}
