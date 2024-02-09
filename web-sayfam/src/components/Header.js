import React from "react";
import { ButtonLanguage } from "./ButtonLanguage";
import ButtonTheme from "./ButtonTheme";
import headerImg from "../assests/headerImg.png";
import "../App.css";

function Header({ theme, handleThemeSwitch, language, toggleLanguage, data }) {
  return (
    <header
      className={`Header CommonThings ${theme === "dark" ? "darkHeader" : ""}`}
    >
      <div className="w-2/3 flex flex-col gap-5">
        <div className="flex gap-5 justify-end text-[15px] font-bold flex-wrap">
          <ButtonLanguage language={language} toggleLanguage={toggleLanguage} />
          <ButtonTheme
            theme={theme}
            handleThemeSwitch={handleThemeSwitch} // handleThemeSwitch fonksiyonunu burada iletiyoruz
          />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 w-1/2 grow">
            <div className="flex flex-col gap-5 grow">
              <h1 className="text-[#CBF281] text-[54px] font-bold">
                {data.heading}
              </h1>
              <p className="text-[24px] font-normal">{data.description}</p>
              <div className="flex gap-5">
                <a href="https://github.com/PnrUlgnr" target="_blank">
                  <button className="flex rounded-md bg-white items-center font-small text-[#4731D3] dark:bg-[#252128] dark:text-white dark:border-white border p-2">
                    Github
                  </button>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/pinar-ulgener-a93b0a186/"
                  target="_blank"
                >
                  <button className="flex rounded-md bg-white items-center font-small text-[#4731D3] dark:bg-[#252128] dark:text-white dark:border-white border p-2">
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Diğer içerikler buraya gelebilir */}
          <img src={headerImg} alt="HeaderIMG" className="grow-0" />
        </div>
      </div>
    </header>
  );
}

export default Header;
