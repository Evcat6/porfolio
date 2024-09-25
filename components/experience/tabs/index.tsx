"use client";

import { Tab } from "./tab";
import styles from "./index.module.css";

type Props = {
  onChangeTab: (tab: "positions" | "certificates" | "conferences") => void;
  tab: string;
  tabsLabels: {
    value: string;
    label: string;
  }[];
};

const Tabs = ({ onChangeTab, tab, tabsLabels }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeTab(e.target.value as "positions" | "certificates" | "conferences");
  };
  return (
    <nav className={styles.container}>
      {tabsLabels.map((tabItem) => (
        <Tab
          key={tabItem.value}
          active={tab === tabItem.value}
          onChange={onChange}
          value={tabItem.value}
        >
          {tabItem.label}
        </Tab>
      ))}
    </nav>
  );
};

export { Tabs };
