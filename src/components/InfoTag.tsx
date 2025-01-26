import { cn } from "../utils/utils";

interface InfoTagProps {
  tag: {
    id: number;
    emoji: string;
    text: string;
  };
}

const InfoTag = ({ tag }: InfoTagProps) => {
  return (
    <div className={cn("flex gap-x-2 min-w-[165px] self-start items-center bg-[#009F79] text-white py-2 px-[6px] rounded-[7px] border-2 border-white text-xs font-bold shadow-[0px_12px_16px_0px_rgba(0,_0,_0,_0.16)]", tag.id === 1 ? "ml-[75px]" : tag.id === 2 ? "ml-[125px]" : "")}>
      <p className="flex justify-center w-5 h-5 items-center rounded-full bg-[#1E735E] text-center">
        {tag.emoji}
      </p>
      <span>{tag.text}</span>
    </div>
  );
};

export default InfoTag;
