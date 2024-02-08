import "../App.css";
import headerImg from "../assests/header.svg";
import { toast } from "react-toastify";

//import { useSelector, useDispatch } from 'react-redux';
//import { toggleDarkMode } from 'pathToYourActionsFile';

//const navigateToGithub = () => {
//window.location.href =
//   "https://github.com/PnrUlgnr?tab=overview&from=2024-01-01&to=2024-01-31";
//};

export default function Header() {
  //const dispatch = useDispatch();
  //const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  //const handleToggleDarkMode = () => {
  //dispatch(toggleDarkMode());
  const navigateToGithub = () => {
    toast.info("Yönlendiriliyorsunuz...", {
      position: "top-center",
      autoClose: 2000, // 2 saniye sonra toast kapanır
      onClose: () => {
        window.location.href =
          "https://github.com/PnrUlgnr?tab=overview&from=2024-01-01&to=2024-01-31";
      },
    });
  };

  const navigateToLink = () => {
    toast.info("Yönlendiriliyorsunuz...", {
      position: "top-center",
      autoClose: 2000, // 2 saniye sonra toast kapanır
      onClose: () => {
        window.location.href = "https://www.linkedin.com/feed/  ";
      },
    });
  };
  //className={`Header CommonThings ${isDarkMode ? 'dark-mode' : ''}`}>
  //header className="Header CommonThings"
  return (
    <header className="Header CommonThings">
      <div className="w-3/5 flex">
        <div className="flex-col">
          <h1 className="text-[#CBF281] text-[54px] font-bold">
            I am a Frontend Developer...
          </h1>
          <p className="text-[24px] font-normal">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <button
            onClick={navigateToGithub}
            className="rounded-xl bg-[#CBF281] text-[#4731D3] mr-3"
          >
            Github
          </button>
          <button
            onClick={navigateToLink}
            className="rounded-xl bg-[#CBF281] text-[#4731D3]"
          >
            LinkedIn
          </button>
        </div>
        <img src={headerImg} className="w-1/3" />
      </div>
    </header>
  );
}
