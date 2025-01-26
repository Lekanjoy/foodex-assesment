
interface StarIconProps {
    className?: string;
    fill: string;
    }

const StarIcon = ({ fill, className }: StarIconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector"
        d="M12.3235 24L8.57349 15.75L0.323486 12L8.57349 8.25L12.3235 0L16.0735 8.25L24.3235 12L16.0735 15.75L12.3235 24Z"
        fill={fill}
      />
    </svg>
  );
};

export default StarIcon;
