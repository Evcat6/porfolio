"use client";

import styles from "./index.module.css";

type Props = {
  date: string;
  title: string;
  link: string;
  link_title: string;
  description?: string;
};

const TimelineItem = ({
  title,
  date,
  description,
  link,
  link_title,
}: Props) => {
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <span className={styles.date}>{date}</span>
        <span>
          <a className={styles.link} href={link}>
            {link_title}
          </a>
        </span>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export { TimelineItem };
export type { Props as ItemProps };
