type TimeLine = {
  name: string;
  overview: string;
  contacts: TimeLineContacts;
  positions: TimeLinePositionItem[];
  certificates: TimeLineExperienceItem[];
  conferences: TimeLineExperienceItem[];
  projects: TimeLineProjectItem[];
};

type TimeLineContacts = {
  email: string;
  github: string;
  linkedin: string;
};

type TimeLineExperienceItem = {
  date: string;
  title: string;
  link: string;
  link_title: string;
};

type TimeLinePositionItem = TimeLineExperienceItem & { description: string };

type TimeLineProjectItem = {
  title: string;
  description: string;
  github_link: string;
  web_page_link?: string;
  preview_link: string;
  technologies: string[];
};

export type {
  TimeLine,
  TimeLineExperienceItem,
  TimeLineProjectItem,
  TimeLineContacts,
  TimeLinePositionItem,
};
