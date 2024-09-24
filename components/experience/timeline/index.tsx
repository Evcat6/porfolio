import { ItemProps, TimelineItem } from "./timeline-item";
import styles from './index.module.css';

type Props = {
  items: ItemProps[];
};

const Timeline = ({ items }: Props) => {
  return (
    <ul className={styles.container} >
      {items.map((item, i) => (
        <TimelineItem
          key={i}
          date={item.date}
          title={item.title}
          link={item.link}
          link_title={item.link_title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export { Timeline };
