"use client";
import styles from "./index.module.css";
import Image from "next/image";
import emailBlackIcon from "@/public/email-black-icon.webp";
import gitHubBlackIcon from "@/public/github-black-icon.webp";
import linkedinBlackIcon from "@/public/linkedin-black-icon.webp";
import emailWhiteIcon from "@/public/email-white-icon.webp";
import gitHubWhiteIcon from "@/public/github-white-icon.webp";
import linkedinWhiteIcon from "@/public/linkedin-white-icon.webp";
import { useThemeStore } from "@/store/useThemeStore";
import { envConfig } from "@/config";

const Footer = () => {
  const { theme } = useThemeStore();
  return (
    <footer className={styles.container} id="contact">
      <span className={styles.left_title}>CONTACT</span>
      <ul className={styles.btn_contact_container}>
        <li>
          <a
            href={`mailto:${envConfig.CONTACT.EMAIL}`}
            className={styles.btn_contact}
          >
            <Image
              src={theme === "dark" ? emailWhiteIcon : emailBlackIcon}
              width={24}
              height={24}
              alt="email"
            />
            <span>Send an email</span>
          </a>
        </li>
        <li>
          <a href={envConfig.CONTACT.LINKEDIN} className={styles.btn_contact}>
            <Image
              src={theme === "dark" ? linkedinWhiteIcon : linkedinBlackIcon}
              width={24}
              height={24}
              alt="linkedin"
            />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={envConfig.CONTACT.GITHUB} className={styles.btn_contact}>
            <Image
              src={theme === "dark" ? gitHubWhiteIcon : gitHubBlackIcon}
              width={24}
              height={24}
              alt="github"
            />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
