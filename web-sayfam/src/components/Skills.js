import React from "react";
import "../App.css";

import jsLogo from "../assests/jsLogo.svg";
import reactLogo from "../assests/reactLogo.svg";
import nodeLogo from "../assests/nodeLogo.svg";
import reduxLogo from "../assests/reduxLogo.svg";
import vscodeLogo from "../assests/vscodeLogo.svg";
import figmaLogo from "../assests/figmaLogo.svg";

const skillsData = [
  { logo: jsLogo, name: "JAVASCRIPT" },
  { logo: reactLogo, name: "REACT" },
  { logo: nodeLogo, name: "NODEJS" },
  { logo: reduxLogo, name: "REDUX" },
  { logo: vscodeLogo, name: "VSCODE" },
  { logo: figmaLogo, name: "FIGMA" },
];

export default function Skills() {
  // İlk üç skill
  const firstColumnSkills = skillsData.slice(0, 3);
  // Son üç skill
  const secondColumnSkills = skillsData.slice(3);

  return (
    <section className="Skills CommonThings">
      <div className="w-full flex flex-col items-start md:flex-row md:justify-center py-12">
        <div className="text-[#4832D3] text-[48px] font-bold mb-10 md:mb-0">
          Skills
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {firstColumnSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <img src={skill.logo} alt={skill.name} className="mb-2" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <div>
            {secondColumnSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <img src={skill.logo} alt={skill.name} className="mb-2" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
