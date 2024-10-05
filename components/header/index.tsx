"use client";
import Link from "next/link";
import styles from "./index.module.css";
import sunFillBlack from "@/public/sun-fill-black-icon.webp";
import sunFillWhite from "@/public/sun-fill-white-icon.webp";
import Image from "next/image";
import { useThemeStore } from "@/store/useThemeStore";
import { envConfig } from "@/config";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <header className={styles.container}>
      <h2 className={styles.left_title}>DR.</h2>
      <nav className={styles.navigation_container}>
        <ul className={styles.navigation_list}>
          {/* <li>
            <Link href="#">Projects</Link>
          </li> */}
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <a href={envConfig.CV.URL} target="_blank">
              CV
            </a>
          </li>
        </ul>
        <Image
          src={theme === "dark" ? sunFillWhite : sunFillBlack}
          onClick={toggleTheme}
          className={styles.sun_btn}
          width={22}
          height={22}
          alt="sun fill"
        />
      </nav>
    </header>
  );
};

export { Header };
