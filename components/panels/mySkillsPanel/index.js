import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";

import styles from "./mySkillsPanel.module.css";

// Blocks
import SkillsBlock from "./skillsBlock";

//Data
import { skillSet } from "../../../data";

export function MySkillsPanel() {
  const { designer, developer, entrep, languages } = skillSet;
  return (
    <MDBContainer fluid className="mt-3">
      <MDBRow>
        {/* Design */}
        <MDBCol size="12" className="bg-dark">
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="pencil-ruler" />}
            title="Designer"
            subHeader="My designs are simple yet intuitive and provide an immersive user experience"
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
            subHeader="I write efficient and elegant, pragmatic solutions for complex problems"
            skillsList={developer.skills}
            toolsList={developer.tools}
            langList={languages}
          />
        </MDBCol>
        {/* Entreprenuer */}
        <MDBCol size="12" className="bg-dark">
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="user-tie" />}
            title="Entrepreneur"
            skillsHeader="What I..."
            subHeader="Innovate..."
            skillsList={entrep.skills}
            toolsList={entrep.tools}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
