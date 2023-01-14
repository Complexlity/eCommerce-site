// Gets React SVG icons. See https://react-icons.github.io/react-icons/
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

// Redux function and interface to read date from state
import { useSelector } from "react-redux";
import { RootState } from "../store/index.js";

const Contact = () => {
  // Reads the current theme state from the store. See src/store/themeSlice.ts
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  const color = darkTheme ? "white" : "#164e63"; // Updates the colors accordingly from the state theme data
  const iconStyle = "h-8 w-8 sm:h-12 sm:w-12 md:w-20 md:h-20";
  return (
    <div className="homepage contact-page flex flex-col justify-start gap-24 bg-gray-200 pt-32 dark:bg-cyan-900">
      <div className="flex justify-evenly ">
        <a href="https://github.com/Complexlity" target={"_blank"}>
          <AiFillGithub className={iconStyle} color={color} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <FaFacebookF color={color} className={iconStyle} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <BsYoutube color={color} className={iconStyle} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <BsLinkedin color={color} className={iconStyle} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <BsTwitter color={color} className={iconStyle} />
        </a>
      </div>
      <p className=" text-md flex items-center justify-center gap-1 px-2 text-center italic dark:text-gray-200 xs:gap-2 sm:text-2xl">
        <span>
          <GoLocation className="inline" /> Googleplex Mountain View,
          California, United States
        </span>
      </p>
    </div>
  );
};

export default Contact;
