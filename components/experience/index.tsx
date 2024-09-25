"use client";
import { useState } from "react";
import styles from "./index.module.css";
import { Tabs } from "./tabs";
import { Timeline } from "./timeline";
import { TimeLine } from "@/types/time-line.type";

const TABS_LABELS: {
  value: keyof Omit<TimeLine, "name" | "overview">;
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
  const [tab, setTab] = useState<keyof Omit<TimeLine, "name" | "overview">>(
    TABS_LABELS[0].value
  );

  return (
    <section id="experience" className={styles.container}>
      <Tabs tab={tab} onChangeTab={setTab} tabsLabels={TABS_LABELS} />
      <Timeline items={timeLine[tab]} />
    </section>
  );
};

export { Experience };
