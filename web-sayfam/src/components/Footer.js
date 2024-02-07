import "../App.css";
import React from "react";

import atsign from "../assests/atsign.svg";
import codepen from "../assests/codepen.svg";
import instagram from "../assests/instagram.svg";
import twitter from "../assests/twitter.svg";

const footerData = [
  {
    name: "atsign",
    logo: atsign,
  },
  {
    name: "codepen",
    logo: codepen,
  },
  {
    name: "instagram",
    logo: instagram,
  },
  { name: "twitter", logo: twitter },
];

const Footer = () => {
  const footerData = [
    {
      twitter: twitter,
      atsign: atsign,
      codepen: codepen,
      instagram: instagram,
    },
  ];

  return (
    <footer className="flex justify-center space-x-4">
      <div className="w-3/5 flex-wrap">
        <h1 className="font-inter text-4xl-custom font-bold leading-none tracking-normal text-left text-custom-purple">
          Send me a message!
        </h1>
        <p className="text-[24px] font-normal">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <p className="text-[24px] font-normal">almilasucode@gmail.com </p>
        {footerData.map((data, index) => (
          <div className="flex space-x-4">
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
