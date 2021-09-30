import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";

import styles from "./mySkillsPanel.module.css";

// Blocks
import SkillsBlock from "./skillsBlock";

//Data
import { skillSet } from "../../../data";

export function MySkillsPanel() {
  const { designer, developer, languages } = skillSet;
  return (
    <MDBContainer fluid className="mt-3">
      <MDBRow>
        {/* Design */}
        <MDBCol size="12" className="bg-dark">
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="pencil-ruler" />}
            title="Designer"
            subHeader="Some words about core design philosophies and compentecies"
            skillsList={designer.skills}
            toolsList={designer.tools}
          />
        </MDBCol>
        {/* Develop */}
        <MDBCol size="12" className="" style={{ backgroundColor: "#E0E0E0" }}>
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="code" />}
            title="Developer"
            dark
            skillsHeader="What I Develop"
            subHeader="Some words about core design philosophies and compentecies"
            skillsList={developer.skills}
            toolsList={developer.tools}
            langList={languages}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
