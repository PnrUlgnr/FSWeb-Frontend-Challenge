import "../App.css";
import React from "react";

import atsign from "../assests/atsign.svg";
import codepen from "../assests/codepen.svg";
import instagram from "../assests/instagram.svg";
import twitter from "../assests/twitter.svg";

// const footerData = [
//   {
//     name: "atsign",
//     logo: atsign,
//   },
//   {
//     name: "codepen",
//     logo: codepen,
//   },
//   {
//     name: "instagram",
//     logo: instagram,
//   },
//   { name: "twitter", logo: twitter },
// ];

const Footer = ({ data }) => {
  const footerData = [
    {
      twitter: twitter,
      atsign: atsign,
      codepen: codepen,
      instagram: instagram,
    },
  ];

  //"text-[#4731D3] font-inter text-4xl-custom font-bold leading-none tracking-normal text-left text-custom-purple  "
  return (
    <footer className="CommonThings bg-white text-[#777777] gap-5 dark:bg-[#252128]">
      <div className="w-1/2 flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-[#4731D3] text-[48px] dark:text-[#8F88FF]">
          {data.heading}
        </h1>
        <p className="flex flex-wrap justify-center w-[400px] font-normal text-[24px] dark:text-white">
          {data.description}
        </p>

        <a
          href="https://www.google.com/"
          className="text-[20px] text-[#4731D3] underline dark:text-[#8F88FF]"
        >
          almilasucode@gmail.com
        </a>
        {footerData.map((data, index) => (
          <div className="ICONSSS flex flex-wrap gap-5">
            <div key={index} className="flex space-x-4">
              <img src={data.twitter} alt="twitter" className="w-6 h-6" />
              <img src={data.atsign} alt="At Sign" className="w-6 h-6" />
              <img src={data.codepen} alt="CodePen" className="w-6 h-6" />
              <img src={data.instagram} alt="Instagram" className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
