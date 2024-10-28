import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Lottie from "react-lottie";
import logo from "../assets/logo.json";

const navLinks = [
  { path: "/", display: "Home" },
  { path: "/weekly", display: "Weekly News" },
  { path: "/monthly", display: "Monthly News" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="h-full w-full bg-blue-300 py-4 md:py-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-b border-purpleColor">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="h-[60px] md:h-[80px]">
              <Link to="/">
                <Lottie options={defaultOptions} />
              </Link>
            </div>
            <h1 className="md:hidden text-xl text-primaryColor">
              Bihar Insights
            </h1>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-6 md:gap-[2.7rem]">
              <ul className="menu flex items-center gap-6">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <BiMenu
                className="h-6 w-6 cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden bg-gray-50 `}
      >
        <div className="h-full px-2 flex flex-col justify-center py-4 overflow-y-auto">
          <ul className="flex flex-col gap-4 justify-center font-medium">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="flex justify-between border-b  items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 cursor-pointer "
                  onClick={toggleSidebar} // Close sidebar after clicking a link
                >
                  <span className="ml-3">{item.display}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
