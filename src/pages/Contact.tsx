import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RootState } from "../store/index.js";
import { useSelector } from "react-redux";

const Contact = () => {
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  const color = darkTheme ? "white" : "#164e63";
  return (
    <div className="homepage bg-gray-200 dark:bg-cyan-900">
      <div className="flex h-full items-center justify-evenly">
        <AiFillGithub size={"5rem"} color={color} />
        <FaFacebookF size={"5rem"} color={color} />
        <BsYoutube size={"5rem"} color={color} />
        <BsLinkedin size={"5rem"} color={color} />
        <BsTwitter size={"5rem"} color={color} />
      </div>
    </div>
  );
};

export default Contact;
