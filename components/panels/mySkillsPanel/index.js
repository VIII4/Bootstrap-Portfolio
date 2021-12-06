import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import styles from "./mySkillsPanel.module.css";

// Blocks
import SkillsBlock from "./skillsBlock";

//Data
import { skillSet } from "../../../data";

export function MySkillsPanel() {
  const { designer, developer, entrep, languages } = skillSet;

  return (
    <MDBContainer fluid className="mt-5">
      <MDBRow className="">
        {/* Design */}
        <MDBCol size="12" className={styles.backgroundImg}>
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="pencil-ruler" />}
            title="Designer"
            subHeader="Simple and Intuitive Designs that Provide an Immersive User Experience"
            skillsHeader="What I Design"
            skillsList={designer.skills}
            toolsList={designer.tools}
          />
        </MDBCol>
        {/* Develop */}
        <MDBCol size="12">
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="code" />}
            dark={true}
            title="Developer"
            subHeader="Efficient, Elegant and Pragmatic Solutions for Complex Problems"
            skillsHeader="What I Develop"
            skillsList={developer.skills}
            toolsList={developer.tools}
            langList={languages}
          />
        </MDBCol>
        {/* Entreprenuer */}
        <MDBCol size="12" className={styles.backgroundImg}>
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="user-tie" />}
            title="Entrepreneur"
            skillsHeader="What I Undertake"
            subHeader="Establish Innovative Business Needs while Cultivating and Mentoring Talent Around Me. "
            skillsList={entrep.skills}
            toolsList={entrep.tools}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
