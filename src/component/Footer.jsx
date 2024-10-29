import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
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

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-full w-full bg-blue-300 py-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-t border-purpleColor">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center m-4">
        <p className="text-[16px] leading-7 font-[400] text-textColor">
          Copyright &copy; {year} BiharInsights. <br />
          <span>All rights reserved.</span>
        </p>

        <p1 className="flex items-center gap-2 text-[16px] leading-7 font-[400] text-textColor">
          <CiMail />
          bhawnagupta7250@gmail.com
        </p1>
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
    </footer>
  );
};

export default Footer;
