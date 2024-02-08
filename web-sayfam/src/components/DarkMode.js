import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.body.classList.add("for_dark_theme");
    document.body.classList.remove("for_light_theme");
    localStorage.setItem("selecteTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    document.body.classList.add("for_light_theme");
    document.body.classList.remove("for_dark_theme");
    localStorage.setItem("selecteTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }
  const toogleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toogleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" for="darkmode-toggle"></label>
    </div>
  );
};
export default DarkMode;
