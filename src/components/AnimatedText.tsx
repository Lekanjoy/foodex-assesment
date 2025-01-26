import { useState, useEffect } from "react";

const phrases = ["ASAP!", "Now! Now!", "as e dey hot!", "Kia Kia!"];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[100px] text-[#009F79] italic">
      <span
        className={`inline-block transition-opacity duration-500 ${
          isVisible ? "fade-in" : "fade-out"
        }`}
      >
        {phrases[currentIndex]}
      </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="12"
          viewBox="0 0 268 12"
          fill="none"
          className='w-[70%] absolute -bottom-[3px] left-0  origin-left transition-transform duration-500'
        >
          <path
            d="M1 9.00003C91.3333 4.83337 270.5 -0.999968 264.5 9.00003"
            stroke="#D87023"
            strokeWidth="6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="12"
          viewBox="0 0 268 12"
          fill="none"
          className={`absolute bottom-0 left-0  origin-left transition-transform duration-500 ${
            isVisible ? "scale-in-x" : "scale-out-x"
          }`}
          style={{ width: "100%" }}
        >
          <path
            d="M1 9.00003C91.3333 4.83337 270.5 -0.999968 264.5 9.00003"
            stroke="#D87023"
            strokeWidth="6"
          />
        </svg>
    </span>
  );
};

export default AnimatedText;
