import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { cn } from "../../utils/utils";

const MobileNav = ({ showNav }: { showNav: boolean }) => {
  return (
    <>
      <div
        className={cn(
          "block ease-in-out duration-500 h-0 opacity-0 transition-all max-h-0 overflow-hidden md:hidden",
           showNav && "max-h-full h-full pt-[54px] opacity-100" 
        )}
      >
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
    </>
  );
};

export default MobileNav;
