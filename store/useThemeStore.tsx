import { create } from "zustand";

interface Store {
  theme: string;
  toggleTheme: () => void;
  loadTheme: () => void;
}

const useThemeStore = create<Store>()((set, get) => ({
  theme: "light",
  toggleTheme: () => {
    const theme = get().theme;
    if (theme === "light") {
      set(() => ({ theme: "dark" }));
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      set(() => ({ theme: "light" }));
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  },
  loadTheme: () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.setAttribute("data-theme", storedTheme);
      set(() => ({ theme: storedTheme }));
      return;
    }
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    set(() => ({ theme: isDark ? "dark" : "light" }));
  },
}));

export { useThemeStore };
