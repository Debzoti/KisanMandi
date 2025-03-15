import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "hidden" : ""}`} />
      <MoonIcon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "hidden" : ""}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
