import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  active: boolean;
};

const Tab = ({ children, value, onChange, active }: Props) => {
  return (
    <label className={`${styles.tab}  ${active ? styles.active : ""}`}>
      <input
        className={styles.input}
        onChange={onChange}
        type="radio"
        name="type"
        value={value}
      />
      {children}
    </label>
  );
};

export { Tab };
