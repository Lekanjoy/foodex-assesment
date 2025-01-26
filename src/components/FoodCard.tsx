
import thumbUp from "../assets/thumbUp.svg";
import { cn } from "../utils/utils";

interface FoodCardProps {
  img: string;
  title: string;
  className?: string;
}


const FoodCard = ({img, title, className}:FoodCardProps) => {
  return (
    <div className={cn("flex flex-col min-w-[150px] border bg-white p-2 pb-6 gap-y-2.5 rounded-xl lg:min-w-[200px] lg:p-3", className)}>
    <img
      src={img}
      alt={title}
      className="rounded-xl w-full object-cover object-center"
    />
    <div className="flex flex-col gap-y-1">
      <p className="font-pangram text-[#3C3937] text-xs text-left lg:text-sm">
        {title}
      </p>
      <p className="bg-[#D6D5CA] uppercase text-[#49280F] w-fit py-px px-1 text-[8px] rounded-full lg:text-xs">
        🍲 Continental
      </p>
    </div>
    <div className="flex gap-x-2 items-center text-[8px] text-[#858786] lg:text-xs">
      <div className="flex gap-x-1 items-center">
        <img src={thumbUp} alt="Liked icon" className="w-3 h-3" />
        <p>120picks</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 2 2"
        fill="none"
      >
        <circle cx="1.02227" cy="1.16106" r="0.407035" fill="#858786" />
      </svg>
      <p className="whitespace-nowrap">Approx. ₦3,000</p>
    </div>
  </div>
  )
}

export default FoodCard