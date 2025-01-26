import StarIcon from "./StarIcon";
import InfoTag from "./InfoTag";
import vectorCtaLeft from "../assets/vectorCtaLeft.png";
import vectorCtaRight from "../assets/vectorCtaRight.png";
import ctaImg from "../assets/ctaImg.png";
import love from "../assets/love.svg";
import menu from "../assets/menu.png";
import menuDisabled from "../assets/menuDisabled.png";

const tagInfoData = [
  { id: 0, text: "Picked by 314 people today", emoji: "👍🏽" },
  { id: 1, text: "Exclude onions.", emoji: "🧅" },
  { id: 2, text: "Must include turkey", emoji: "🥩" },
];

const Cta = () => {
  return (
    <>
      <section className="relative w-full flex flex-col text-center items-center justify-center gap-y-6 mt-[64px] lg:mt-[100px]">
        <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
          <StarIcon
            fill="black"
            className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
          />
          <p className="uppercase text-xs md:text-sm lg:text-base">
            Join the chowafrica waitlist
          </p>
          <StarIcon
            fill="black"
            className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
          />
        </div>
        <h2 className="font-medium text-[32px] text-[#353542] leading-[46px] lg:text-[64px] lg:leading-[72px]">
          Are you tired of eating the <br className="hidden md:block" />{" "}
          <span className="md:hidden">
            same dishes{" "}
            <span className="bg-[#D87023] border-[1.9px] border-black rounded-full text-[22px] font-normal text-white p-[2px_6px_4px_16px] shadow-[0px_5.736px_7.648px_0px_rgba(0,_0,_0,_0.16)]">
              everyday?
            </span>
          </span>
          <span className="hidden bg-[#D87023] border-4 border-black rounded-full  font-normal text-white p-[4px_20px_6px_20px] shadow-[0px_12px_16px_0px_rgba(0,_0,_0,_0.16)] md:inline lg:text-[48px]">
            🍛 same dishes everyday? 🍝
          </span>
        </h2>
        <p className="mt-2 text-sm leading-[21px] lg:text-base lg:max-w-2/4">
          Do you crave new and exciting dishes? Look no further! Chow is the
          perfect solution for discovering your next dish.
        </p>

        <div className="max-w-full  -z-[1] flex absolute bottom-3/5 left-0 right-0 justify-between  overflow-hidden md:bottom-0  ">
          <img
            src={vectorCtaLeft}
            alt="vector left"
            className="w-[85px] h-[67px] md:w-auto md:h-auto md:mr-10"
          />
          <img
            src={vectorCtaRight}
            alt="vector right"
            className="w-[85px] h-[67px] md:w-auto md:h-auto"
          />
        </div>
      </section>

      <section className="w-full relative flex flex-col items-center justify-center gap-y-6 rounded-2xl bg-[#FFF8F2] mt-[56px] px-10 py-4 mb-[64px] md:mb-[59px] md:mt-[69px] md:flex-row md:justify-center md:gap-x-3 lg:gap-x-6">
        <div className="flex relative z-[2] w-full min-h-[400px] flex-col items-center justify-center gap-y-6 md:w-1/2">
          <img src={menu} alt="Menu list" />
          <img src={menuDisabled} alt="" className="absolute " />
        </div>
        <div className="relative z-[2] w-full h-full flex flex-col items-center justify-center md:w-1/2">
          <img src={ctaImg} alt="Emmanuel" />
          <div className="absolute flex flex-col gap-y-2 -left-4 bottom-10">
            {tagInfoData.map((tag) => (
              <InfoTag key={tag.id} tag={tag} />
            ))}
          </div>

          <div className="absolute top-24 -right-12 flex flex-col gap-y-2 min-w-[165px]  bg-[#D87023] text-white py-2 px-[6px] rounded-[7px] border-2 border-white text-xs font-bold shadow-[0px_12px_16px_0px_rgba(0,_0,_0,_0.16)]">
            <p className="flex justify-center w-5 h-5 items-center text-center rounded-full bg-[#1E735E] ">
              💵
            </p>
            <span>
              You can buy all for{" "}
              <span className="text-[#01FFC2] font-black">N2,500</span> at Yaba
            </span>
          </div>
        </div>
        <img
          src={love}
          alt="love bottom"
          className="absolute z-[1] bottom-0 right-0 w-[85px] h-[67px] md:w-auto md:h-auto"
        />
        <img
          src={love}
          alt="love top"
          className="absolute z-[1] top-0 left-0 w-[85px] h-[67px] md:w-auto md:h-auto"
        />
      </section>
    </>
  );
};

export default Cta;
