import { Link } from "react-router-dom";
import logo from "../assets/logo.json";
import { RiLinkedinFill } from "react-icons/ri";
import Lottie from "react-lottie";

import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/deepanshu-gupta-cse",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/Deepanshu-in",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/deepanshu_gupta.pvt/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks = [
  { path: "/", display: "Home" },
  { path: "/contact", display: "Contact us" },
];

const quickLinks02 = [
  { path: "/salons", display: "Find a Salon" },
  { path: "/", display: "Book an Appointment" },
];

const quickLinks03 = [
  { path: "/contact", display: "Contact Us" },
  { path: "/terms-and-condition", display: "Terms and Conditions" },
  { path: "/privacy-policy", display: "Privacy Policy" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <footer className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-t border-purpleColor h-[100px]">
      <div className="container mt-1 ml-[2px] ">
        <div className="justify-between flex-wrap gap-[30px]">
          <div className="flex flex-col md:flex-row justify-between items-start flex-wrap md:items-center">
            <h2 className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright &copy;{year} BiharInsights
              <h2>All rights reserved.</h2>
            </h2>
            <h2 className="text-[16px] leading-7 font-[400] text-textColor mt-1">
              Support: bhawnagupta7250@gmail.com
            </h2>
            <div className="flex items-center gap-3 mt-4 pb-2">
              {socialLinks.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
