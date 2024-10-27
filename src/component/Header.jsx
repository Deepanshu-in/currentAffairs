import logo from "../assets/logo.json";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import Lottie from "react-lottie";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/weekly",
    display: "Weekly News",
  },
  {
    path: "/monthly",
    display: "Monthly News",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  return (
    <header
      className="header flex items-center mb-10 border border-b-2 p-8"
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Link to="/">
              <Lottie options={defaultOptions} />
            </Link>
          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-6 md:gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? " text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="h-6 w-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
