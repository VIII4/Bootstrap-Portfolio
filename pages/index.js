import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import { IsMobileCheck } from "../utilities/app";

import {
  AboutMePanel,
  MySkillsPanel,
  ProjectsPanel,
  ContactPanel,
  LandingPanel,
} from "../components/panels";

export default function Home() {
  const [isMobile, setIsMobile] = useState(null);

  const onResize = () => {
    setIsMobile(IsMobileCheck);
  };

  useEffect(() => {
    setIsMobile(IsMobileCheck);

    const resize = () => {
      onResize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  });

  return (
    <Layout>
      <LandingPanel isMobile={isMobile} />
      <AboutMePanel />
      <MySkillsPanel />
      <ProjectsPanel />
      <ContactPanel />
    </Layout>
  );
}
