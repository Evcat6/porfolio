"use client";
import { useState } from "react";
import styles from "./index.module.css";
import { Tabs } from "./tabs";
import { Timeline } from "./timeline";
import { TimeLine } from "@/types";
import { Projects } from "./projects";

type TabValue = "positions" | "certificates" | "conferences";

const TABS_LABELS: {
  value: TabValue;
  label: string;
}[] = [
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

const Experience = ({ timeLine }: { timeLine: TimeLine }) => {
  const [tab, setTab] = useState<TabValue>(TABS_LABELS[0].value);

  return (
    <section id="experience" className={styles.container}>
      <Tabs tab={tab} onChangeTab={setTab} tabsLabels={TABS_LABELS} />
      <Timeline items={timeLine[tab]} />
      <Projects projects={timeLine.projects} />
    </section>
  );
};

export { Experience };
