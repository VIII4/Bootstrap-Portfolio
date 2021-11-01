import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

import styles from "./mySkillsPanel.module.css";

// Blocks
import SkillsBlock from "./skillsBlock";

//Data
import { skillSet } from "../../../data";

export function MySkillsPanel() {
  const { designer, developer, entrep, languages } = skillSet;

  //When Skillblock title is in screen, animate list with delay
  // get list of skill block titles

  // setTimeout(function () {}, 200 * increment);

  return (
    <MDBContainer fluid className="mt-5">
      <MDBRow className="">
        {/* Design */}
        <MDBCol size="12" className={styles.backgroundImg}>
          <SkillsBlock
            icon={<MDBIcon size="3x" color="dark" fas icon="pencil-ruler" />}
            title="Designer"
            subHeader="My designs are simple yet intuitive and provide an immersive user experience"
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
            subHeader="I write efficient and elegant, pragmatic solutions for complex problems"
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
