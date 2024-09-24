"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";

export const ThemeManager = () => {
  const { loadTheme } = useThemeStore();
  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return null;
};
