import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import useThemePreference from "./hooks/useThemePreference";
import dataENG from "./Translation /en.json";
import dataTR from "./Translation /tr.json";

function App() {
  const [responseData, setResponseData] = useState(null);
  const [language, setLanguage] = useState("english");

  const prefersTheme = useThemePreference();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (prefersTheme ? "dark" : "light")
  );

  const toggleLanguage = () => {
    setLanguage(language === "english" ? "turkish" : "english");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    document.documentElement.lang = language;
    localStorage.setItem("language", language);

    const selectedData = language === "english" ? dataENG : dataTR;

    axios
      .post("https://reqres.in/api/data", selectedData)
      .then(function (response) {
        console.log("RESPONSE:", response);
        setResponseData(response.data);
      })
      .catch(function (error) {
        console.error("API request error:", error);
      });
  }, [theme, language]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`App ${theme}`}>
      <Header
        theme={theme}
        handleThemeSwitch={handleThemeSwitch}
        language={language}
        toggleLanguage={toggleLanguage}
        data={language === "english" ? dataENG.Header : dataTR.Header}
      />
      <Skills data={language === "english" ? dataENG.Skills : dataTR.Skills} />
      <Profile
        data={language === "english" ? dataENG.Profile : dataTR.Profile}
      />
      <Projects
        data={language === "english" ? dataENG.Projects : dataTR.Projects}
      />
      <Footer data={language === "english" ? dataENG.Footer : dataTR.Footer} />
    </div>
  );
}

export default App;
