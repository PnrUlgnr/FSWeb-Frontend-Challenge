import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./data";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";
function App() {
  const [language, setLanguage] = useState("tr"); // Varsayılan dil olarak Türkçe ayarlandı.

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  const content = data[language]; // Seçilen dile göre içerik yüklenecek.

  return (
    <div className="App">
      <div>
        <div className="flex ">
          <button
            className=" flex  fixed top-4 right-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleChangeLanguage("tr")}
          >
            TR-
          </button>
          <button
            className=" flex disabled:first-line:  fixed top-4 right-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded "
            onClick={() => handleChangeLanguage("en")}
          >
            EN
          </button>
        </div>
        {/* İçerik */}
        <h1>{content.intro[0]}</h1>
        <p>{content.intro[1]}</p>

        {/* ... Diğer içerikler profile, projects gibi yine content üzerinden erişilerek render edilir ... */}

        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
        <DarkMode />
        <ToastContainer />
      </div>
    </div>
  );
}
export default App;
