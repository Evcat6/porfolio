const { SSH_DOMAIN_NAME, TIMELINE_URL, CV_URL } = process.env;

const envConfig = {
  CONTACT: {
    LINKEDIN: "https://www.linkedin.com/in/yevhen-kotliarchuk",
    GITHUB: "https://github.com/Evcat6",
    EMAIL: "yevhenkotliarchuk@gmail.com",
  },
  SSH: {
    DOMAIN: {
      NAME: SSH_DOMAIN_NAME as string,
    },
  },
  TIMELINE: {
    URL: TIMELINE_URL as string,
  },
  CV: {
    URL: CV_URL as string,
  },
};

export { envConfig };
