import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../components/layout";

import MobileBanner from "../components/elements/mobileBanner";

import {
  AboutMePanel,
  FullScreenIntro,
  MySkillsPanel,
  ProjectsPanel,
  ContactPanel,
} from "../components/panels";

export default function Home() {
  return (
    <Layout>
      <FullScreenIntro />
      <MobileBanner />
      <AboutMePanel />
      <MySkillsPanel />
      <ProjectsPanel />
      <ContactPanel />
    </Layout>
  );
}
