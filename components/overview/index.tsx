import styles from "./index.module.css";

const Overview = ({ name }: { name: string }) => {
  return (
    <section className={styles.container}>
      <span className={styles.greeting_title}>Hey, I&apos;m</span>
      <h1 className={styles.title}>{name}</h1>
      <article className={styles.description}>
        I&apos;m a digital enthusiast with a zest for adventure, dedicated to
        harnessing technology for creative problem-solving. I enjoy sharing
        knowledge and fostering connections to inspire growth and innovation.
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
