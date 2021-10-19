import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../components/layout";
import FullScreenIntro from "../components/panels/fullscreenIntro";
import MobileBanner from "../components/elements/mobileBanner";
import ProjectsPanel from "../components/panels/projectsPanel";

import { AboutMePanel, MySkillsPanel, BioPanel } from "../components/panels";

export default function Home() {
  return (
    <Layout>
      <FullScreenIntro />
      <MobileBanner />
      {/* about me and skills panels need to within bio */}
      <AboutMePanel />
      <MySkillsPanel />
      <ProjectsPanel />
    </Layout>
  );
}
