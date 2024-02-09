import React from "react";
import "../App.css";

const ButtonTheme = ({ handleThemeSwitch, checked, theme }) => {
  const handleClick = () => {
    if (handleThemeSwitch) {
      handleThemeSwitch();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleClick} />
        <span
          className={`slider dark:bg-[#3A3A3A] round ${
            theme === "dark" ? "bg-[#3A3A3A]" : ""
          }`}
        ></span>
        {theme === "dark" && <span className="slider2 round"></span>}
      </label>
      <p className="text-[15px] font-bold text-[#4731D3] dark:text-[#D9D9D9]">
        {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
      </p>
    </div>
  );
};

export default ButtonTheme;
