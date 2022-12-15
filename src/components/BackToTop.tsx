import { FC, useEffect, useState } from "react";

interface Props {}

const BackToTopButton: FC<Props> = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else setBackToTopButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTopButton && (
        <div
          onClick={scrollUp}
          className="fixed bottom-[50px] right-[50px] flex h-[50px] w-[50px] cursor-pointer  items-center justify-center rounded-full bg-cyan-600 dark:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="13"
            viewBox="0 0 26 13"
            fill="none"
            className="inline scale-[1.4]"
          >
            <path
              className="fill-gray-200 dark:fill-cyan-600"
              d="M11.6907 1.13389C12.4422 0.483038 13.5578 0.483037 14.3093 1.13389L24.9724 10.3684C25.6723 10.9746 25.2437 12.1244 24.3178 12.1244H1.68223C0.756341 12.1244 0.327668 10.9746 1.02757 10.3684L11.6907 1.13389Z"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default BackToTopButton;
