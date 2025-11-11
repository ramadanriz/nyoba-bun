import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("business");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <label className="swap swap-rotate btn btn-square btn-ghost fixed z-50">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value="synthwave"
        onChange={handleToggle}
        // show toggle image based on localstorage theme
        checked={theme === "light" ? false : true}
      />

      {/* sun icon */}
      <BsSun className="text-xl swap-on" />

      {/* moon icon */}
      <BsMoonStars className="text-xl swap-off" />
    </label>
  );
};

export default ThemeToggle;
