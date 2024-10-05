type TimeLine = {
  name: string;
  overview: string;
  positions: TimeLineExperienceItem[];
  certificates: TimeLineExperienceItem[];
  conferences: TimeLineExperienceItem[];
  projects: TimeLineProjectItem[];
};

type TimeLineExperienceItem = {
  date: string;
  title: string;
  link: string;
  link_title: string;
  description?: string;
};

type TimeLineProjectItem = {
  title: string;
  description: string;
  github_link: string;
  web_page_link?: string;
  preview_link: string;
  technologies: string[];
};

export type { TimeLine, TimeLineExperienceItem, TimeLineProjectItem };
