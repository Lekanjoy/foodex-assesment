import { useState } from "react";
import MobileNav from "./MobileNav";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import hamburger from "../../assets/hamburger.svg";
import closeIcon from "../../assets/closeIcon.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[50]  flex flex-col  px-6 py-4 md:relative md:w-auto">
      <div className="flex justify-between items-center ">
        <img src={logo} alt="logo" className="w-[68px] h-[52px] " />
        <div className="flex items-center gap-x-4 md:hidden! ">
          <button className="bg-[#D87023] uppercase border-2 border-white text-xs py-2 px-4 rounded-4xl text-white font-bold">
            Join Waitlist
          </button>
          <img
            src={showNav? closeIcon : hamburger}
            alt="hamburger"
            onClick={() => setShowNav(!showNav)}
            className="w-[18px] h-[18px] cursor-pointer"
          />
        </div>
      </div>

      <div className="hidden ease-in-out duration-500 mt-[54px] md:block">
        <nav className="flex flex-col gap-y-5 text-[#353542] text-lg font-medium">
          <a href="/" className="pl-5 border-l-3 border-[#D87023]">
            Home
          </a>
          <a href="/waitlist" className="pl-5">
            Join waitlist
          </a>
        </nav>
        <div className="flex mt-4 gap-x-3 pl-5">
          <a href="/" className="bg-[#F7ECE4] p-2 rounded">
            <img src={facebook} alt="Facebook" className="w-[20px] h-[20px]" />
          </a>
          <a href="/" className="bg-[#F7ECE4] p-2 rounded">
            <img src={twitter} alt="Twitter" className="w-[20px] h-[20px]" />
          </a>
          <a href="/" className="bg-[#F7ECE4] p-2 rounded">
            <img
              src={instagram}
              alt="Instagram"
              className="w-[20px] h-[20px]"
            />
          </a>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <MobileNav showNav={showNav} />
    </header>
  );
};

export default Header;
