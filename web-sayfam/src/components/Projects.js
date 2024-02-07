import React from "react";
import "../App.css";

import Project from "../assests/Project.svg";
import Project2 from "../assests/Project2.svg";

const projectsData = [
  {
    imgSrc: Project,
    title: "Workintech",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    buttons: ["Button", "Button", "Button"],
    links: ["vercel", "visit website"],
  },
  {
    imgSrc: Project2,
    title: "Journey",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    buttons: ["Button", "Button", "Button"],
    links: ["vercel", "visit website"],
  },
];

export default function Projects() {
  return (
    <section className="Projects flex-col CommonThings">
      <h2 className="text-[48px] text-[#4731D3] font-bold justify-start w-3/5">
        Projects
      </h2>
      {projectsData.map((project, index) => (
        <div key={index} className="w-3/5 bg-[#fff] rounded-xl flex">
          <img src={project.imgSrc} alt={`Project ${index + 1}`} />
          <div className="flex-col">
            <h3 className="font-bold text-[32px] text-[#4731D3]">
              {project.title}
            </h3>
            <p className="text-[16px] text-[#383838]">{project.description}</p>
            <div className="flex">
              {project.buttons.map((button, btnIndex) => (
                <button key={btnIndex} className="rounded-xl bg-[#4731D3]">
                  {button}
                </button>
              ))}
            </div>
            <div className="flex">
              {project.links.map((link, linkIndex) => (
                <a key={linkIndex} className="text-[#383838]">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
