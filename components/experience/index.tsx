"use client";
import { useState } from "react";
import styles from "./index.module.css";
import { Tabs } from "./tabs";
import { Timeline } from "./timeline";

const TABS_LABELS: { value: keyof typeof TABS_VALUES, label: string }[] = [
  {
    value: "positions",
    label: "Positions",
  },
  {
    value: "certificates",
    label: "Certificates",
  },
  {
    value: "conferences",
    label: "Conferences",
  },
];

const TABS_VALUES = {
  positions: [
    {
      date: "May 2023 - Apr 2024",
      title: "Back End Developer",
      link: "https://www.linkedin.com/company/byfl-team",
      link_title: "BYFL.team"
    },
    {
      date: "Jul 2023 - Oct 2023",
      title: "Software Engineer",
      link: "https://www.cmlteam.com/",
      link_title: "CML Team LTD",
    },
    {
      date: "Dec 2022 - Apr 2023",
      title: "Full Stack Engineer",
      link: "https://academy.binary-studio.com/",
      link_title: "BinaryStudioAcademy",
    },
  ],
  certificates: [
    {
      date: "Aug 2024",
      title: "Frontend Developer (React) Certificate | HackerRank",
      link: "https://www.hackerrank.com/certificates/6393cb36671d",
      link_title: "Certificate"
    },
    {
      date: "Jun 2023",
      title: "JavaScript Algorithms and Data Structures | freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/fccbf4e0880-8eaa-46ea-87a4-3927a99c21de/javascript-algorithms-and-data-structures",
      link_title: "Certificate"
    },
    {
      date: "Apr 2023",
      title: "Binary Studio Academy JS course",
      link: "https://study.binary-studio.com/certificate/91fa662b-cc84-4f51-a61f-7603ea6d1a9a",
      link_title: "Certificate"
    }
  ],
  conferences: [
    {
      date: "Oct 2023",
      title: "Infoshare Katowice",
      link: "https://infoshare.pl/infoshare2023/",
      link_title: "Link"
    }
  ],
};

const Experience = () => {
  const [tab, setTab] = useState<keyof typeof TABS_VALUES>(TABS_LABELS[0].value);

  return (
    <section id="experience" className={styles.container}>
      <Tabs tab={tab} onChangeTab={setTab} tabsLabels={TABS_LABELS} />
      <Timeline items={TABS_VALUES[tab]} />
    </section>
  );
};

export { Experience };
