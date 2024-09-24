"use client";
import Link from "next/link";
import styles from "./index.module.css";
import sunFillBlack from "@/public/sun-fill-black-icon.webp";
import sunFillWhite from "@/public/sun-fill-white-icon.webp";
import Image from "next/image";
import { useThemeStore } from "@/store/useThemeStore";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <header className={styles.container}>
      <h2 className={styles.left_title}>DR.</h2>
      <nav className={styles.navigation_container}>
        <ul className={styles.navigation_list}>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="">Resume</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
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
