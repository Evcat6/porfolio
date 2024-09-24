import styles from "./index.module.css";

const Overview = () => {
  return (
    <section className={styles.container}>
      <span className={styles.greeting_title}>Hey, I&apos;m</span>
      <h1 className={styles.title}>Yevhen Kotliarchuk</h1>
      <article className={styles.description}>
        Highly skilled and adaptable Software Engineer with 2 years of
        experience in developing dynamic and user-centric applications. Equipped
        with expertise in both frontend and backend technologies, I excel at
        seamlessly bridging the gap between design and functionality. Whether
        it&apos;s crafting engaging user interfaces or architecting scalable and
        efficient server-side solutions, I thrive in tackling complex challenges
        throughout the entire development lifecycle
      </article>
      <div className={styles.btn_ssh_container}>
        <button className={styles.btn_ssh}>
          <a href="">ssh {process.env.SSH_DOMAIN_NAME}</a>
        </button>
      </div>
    </section>
  );
};

export { Overview };
