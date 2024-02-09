import React from "react";
import "../App.css";
import profileImg from "../assests/Profile.svg";

// const basicInformationData = [
//   { label: "Doğum tarihi", value: "4.03.1996" },
//   { label: "İkamet Şehri", value: "Ankara" },
//   { label: "Eğitim Durumu", value: "Hacettepe Ünv. Biyoloji Lisans, 2016" },
//   { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
// ];

// const aboutMeData = [
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
//   "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam",
// ];

export default function Profile({ data }) {
  const basicInformationData = [
    { label: data.birth_date, value: "24.03.1996" },
    { label: data.residence, value: "Ankara" },
    {
      label: data.education,
      value: "Hacettepe Üniversitesi Biyoloji Lisans, 2016",
    },
    { label: data.role, value: "Frontend, UI" },
  ];
  const aboutMeData = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam",
  ];
  return (
    <main className="Profile flex-col CommonThings bg-[#4731D3] dark:bg-[#171043]">
      <h2 className="text-[48px] text-[#CBF281] font-bold justify-start w-3/5">
        {data.heading}
      </h2>
      <div className="w-3/5">
        <div className="flex">
          <div className="flex flex-col gap-8 pt-14 pb-14">
            <p className="text-[30px] font-normal">{data.heading}</p>
            {basicInformationData.map((item, index) => (
              <p key={index} className="text-[16px]">
                <span className="text-[#CBF281] font-semibold">
                  {item.label}
                </span>{" "}
                {item.value}
              </p>
            ))}
          </div>
          <img src={profileImg} alt="Profile" />
          <div className="flex flex-col gap-8 pt-14 pb-14">
            <p className="text-[30px] font-normal"> {data.heading} </p>
            {aboutMeData.map((item, index) => (
              <p key={index} className="text-[16px]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
