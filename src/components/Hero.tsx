import AnimatedText from "./AnimatedText";
import StarIcon from "./StarIcon";
import FoodCard from "./FoodCard";
import appMenu from "../assets/menuApp.png";
import sauce from "../assets/sauce.png";
import asun from "../assets/asun.png";
import egg from "../assets/egg.png";
import shredded from "../assets/shredded.png";
import souse from "../assets/souse.png";

const Hero = () => {
  return (
    <section className="relative bg-heroBg px-4 flex justify-center items-center flex-col text-center bg-[url(./assets/heroVector.png)] bg-cover rounded-lg text-white w-full min-h-screen pt-12 overflow-hidden lg:pt-24">
      <div className="flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
        <StarIcon
          fill="white"
          className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
        />
        <p className="uppercase text-xs md:text-sm lg:text-base">
          Join the chowafrica waitlist
        </p>
        <StarIcon
          fill="white"
          className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
        />
      </div>
      <h1 className="mt-3 mb-6 text-4xl leading-[35px] font-medium tracking-tight md:mt-4 lg:mt-6 md:text-5xl lg:text-[76px] lg:leading-[86px] xl:text-[96px]">
        Find chow, <AnimatedText />
      </h1>
      <p className="text-sm leading-[21px] md:text-base lg:leading-[30px] lg:max-w-2/4 lg:text-lg ">
        The patient dog eats left overs. Be the first to know when we launch.
        Join our Waitlist 😎
      </p>
      <form className="mt-10 w-full flex flex-col justify-center items-center gap-y-3 md:flex-row md:gap-x-3 lg:max-w-2/4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full text-[#1A1A1A] bg-[#F2F3F7] border border-[#D6DAD9] rounded-xl py-3 px-4"
        />
        <button className="w-fit py-3 px-10 bg-[#009F79] text-white rounded-full uppercase border-2 border-white whitespace-nowrap md:text-sm ">
          Join Waitlist
        </button>
      </form>
      <section className="relative w-full h-[380px] lg:h-[430px]">
        <div className=" w-full absolute top-8 left-0 flex gap-x-4 overflow-hidden! mt-[100px] p-5 max-w-full ">
          <FoodCard className="sliding-item " img={sauce} title={"Pasta, Green Sauce & Kpomo"} />
          <FoodCard className="sliding-item " img={shredded} title={"Shredded Roasted Chicken"} />
          <FoodCard className="sliding-item " img={egg} title={"Egg-cooked Fried Rice & Peas"} />
          <FoodCard className="sliding-item " img={asun} title={"Calabar Asun & Gravy Sauce"} />
          <FoodCard className="sliding-item " img={sauce} title={"Pasta, Green Sauce & Kpomo"} />
          <FoodCard className="sliding-item " img={souse} title={"Souse Fries & Bacon"} />
          <FoodCard className="sliding-item " img={shredded} title={"Shredded Roasted Chicken"} />
        </div>
        <img
          src={appMenu}
          alt="App menu"
          className="absolute right-[70px] bottom-0 z-[5] w-[150px] lg:w-[200px] lg:right-[93px]"
        />
      </section>
    </section>
  );
};

export default Hero;
