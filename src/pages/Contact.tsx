import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RootState } from "../store/index.js";
import { GoLocation } from "react-icons/go";
import { useSelector } from "react-redux";

const Contact = () => {
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  const color = darkTheme ? "white" : "#164e63";
  return (
    <div className="homepage contact-page flex flex-col justify-start gap-24 bg-gray-200 pt-32 dark:bg-cyan-900">
      <div className="flex justify-evenly ">
        <a href="https://github.com/Complexlity" target={"_blank"}>
          <AiFillGithub size={"5rem"} color={color} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <FaFacebookF size={"5rem"} color={color} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <BsYoutube size={"5rem"} color={color} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <BsLinkedin size={"5rem"} color={color} />
        </a>
        <a href="https://www.youtube.com/watch?v=7wtfhZwyrcc" target={"_blank"}>
          <BsTwitter size={"5rem"} color={color} />
        </a>
      </div>
      <p className=" flex items-center justify-center gap-2 text-center text-2xl italic dark:text-gray-200">
        <GoLocation /> Googleplex Mountain View, California, United States
      </p>
    </div>
  );
};

export default Contact;
