"use client";
import Image from "next/image";
import { useThemeStore } from "@/store/useThemeStore";
import styles from "./index.module.css";
import GithubWhiteBrightIcon from "@/public/github-white-bright-icon.webp";
import GithubBlackIcon from "@/public/github-black-icon.webp";
import LinkWhiteIcon from "@/public/link-white-icon.webp";
import LinkBlackIcon from "@/public/link-black-icon.webp";
import { TimeLineProjectItem } from "@/types";

type Props = {
  projects: TimeLineProjectItem[];
};

const Projects = ({ projects }: Props) => {
  const { theme } = useThemeStore();
  return (
    <div id="projects">
      <h2 className={styles.title}>FEATURED PROJECTS</h2>
      <div className={styles.projects_container}>
        {projects.map(
          ({
            title,
            description,
            github_link,
            web_page_link,
            preview_link,
            technologies,
          }) => (
            <div className={styles.project_container} key={title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.project_preview_image}
                alt="project preview"
                src={preview_link}
              />
              <div className={styles.project_info_container}>
                <div className={styles.project_title_container}>
                  <h3 className={styles.project_title}>{title}</h3>
                  <div className={styles.project_links}>
                    <a href={github_link}>
                      <Image
                        src={
                          theme === "dark"
                            ? GithubWhiteBrightIcon
                            : GithubBlackIcon
                        }
                        alt="github"
                        width={18}
                        height={18}
                      />
                    </a>
                    {web_page_link && (
                      <a href={web_page_link}>
                        <Image
                          src={theme === "dark" ? LinkWhiteIcon : LinkBlackIcon}
                          alt="link"
                          width={18}
                          height={18}
                        />
                      </a>
                    )}
                  </div>
                </div>
                <p className={styles.project_description}>{description}</p>
                <span className={styles.project_technologies}>
                  {technologies?.join(" - ")}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { Projects };
