const FooterCard = () => {
  return (
    <footer className="bg-white flex flex-col gap-y-16 rounded-[14px] border border-[#EDEFFC] p-[48px_42px_48px_67px] shadow-[0px_20px_28px_0px_rgba(0,_0,_0,_0.08)] mb-10 md:flex-row md:justify-between md:items-center">
      <p className="font-pangram text-[32px] font-bold text-[#353542] leading-[52px] ">
        Sigup to{" "}
        <span className="bg-[#5F63E1] rounded-[40px] text-white border-2 border-black p-[2px_12px_4px_12px] font-normal">
          chowafrica
        </span>{" "}
        and say <br className="hidden lg:block" />
        <span className="bg-black text-white text-3xl font-normal border-2 border-[#009F79] p-[2px_12px_4px_12px] rounded-[40px]">
          goodbye 👋🏽
        </span>{" "}
        to mealtime stress.
      </p>
      <button className="w-fit py-3 px-10 bg-[#009F79] text-white rounded-full uppercase border-2 border-white whitespace-nowrap md:text-sm ">
        Join Waitlist
      </button>
    </footer>
  );
};

export default FooterCard;
