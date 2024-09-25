type TimeLine = {
  name: string;
  overview: string;
  positions: TimeLineItem[];
  certificates: TimeLineItem[];
  conferences: TimeLineItem[];
};

type TimeLineItem = {
  date: string;
  title: string;
  link: string;
  link_title: string;
};

export type { TimeLine, TimeLineItem };
