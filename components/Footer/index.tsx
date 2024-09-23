import styles from "./index.module.css";
import Image from "next/image";
import emailBlackIcon from '@/public/email-black-icon.webp';
import gitHubBlackIcon from '@/public/github-black-icon.webp';
import linkedinBlackIcon from '@/public/linkedin-black-icon.webp';

const Footer = () => {
  return (
    <footer className={styles.container} id="contact">
      <span className={styles.left_title}>CONTACT</span>
      <ul className={styles.btn_contact_container}>
        <li>
          <a
            href={`mailto:${process.env.CONTACT_DOMAIN}`}
            className={styles.btn_contact}
          >
            <Image src={emailBlackIcon} width={24} height={24} alt="email" /><span>Send an email</span>
          </a>
        </li>
        <li>
          <a href={process.env.CONTACT_LINKEDIN} className={styles.btn_contact}>
          <Image src={linkedinBlackIcon} width={24} height={24} alt="linkedin" /><span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={process.env.CONTACT_GITHUB} className={styles.btn_contact}>
          <Image src={gitHubBlackIcon} width={24} height={24} alt="github" /><span>GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
