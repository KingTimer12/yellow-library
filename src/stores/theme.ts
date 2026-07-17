import { createSignal } from "solid-js"

export type AppTheme = "light" | "dark"

const STORAGE_KEY = "app-theme"

const initial = (): AppTheme => {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === "dark" ? "dark" : "light"
}

const [theme, setThemeSignal] = createSignal<AppTheme>(initial())

const apply = (t: AppTheme) => {
  document.documentElement.dataset.kbTheme = t
  localStorage.setItem(STORAGE_KEY, t)
}

/** apply on module load so the very first paint matches the stored theme */
apply(theme())

export const setTheme = (t: AppTheme) => {
  setThemeSignal(t)
  apply(t)
}

export const toggleTheme = () => setTheme(theme() === "dark" ? "light" : "dark")

export const isDark = () => theme() === "dark"

export { theme }
