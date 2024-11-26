import { ref } from "vue";

export function useTheme() {
  const isDark = ref(false);
  // Initialize theme based on localStorage or system preference
  if (
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return { isDark, toggleTheme };
}
