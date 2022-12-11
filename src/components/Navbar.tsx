import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillGithub } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import type { RootState } from "../store/index.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/theme.js";
import { toggleOverlay } from "../store/overlay.js";
import { Badge } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette.js";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const overlay = useSelector((state: RootState) => state.overlay);
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  const dispatch = useDispatch();
  const toggleThemes = () => dispatch(toggleTheme());
  const value = darkTheme ? "80%" : "40%";
  document.documentElement.style.setProperty("--brightness", value);
  return (
    <nav className="mx-auto flex items-center justify-between  border-b-[2px] border-gray-200 bg-gray-200 py-3 px-4 text-xl text-cyan-900 shadow-md dark:border-sky-800 dark:bg-cyan-900 dark:text-gray-300 md:text-2xl">
      <div className="sm:h-[2.5rem] sm:w-[2.5rem]">
        <a
          href="https://github.com/Complexlity/eCommerce-site"
          target={"_blank"}
        >
          <VscGithub className="h-full w-full" size={"2rem"} />
        </a>
        {/* {darkTheme && <VscGithub size={"2.5rem"} />} */}
        {/* {!darkTheme && <AiFillGithub size={"2.5rem"} />} */}
      </div>
      <ul className="mx-auto flex flex-col items-center justify-end gap-2 xs:flex-row xs:gap-4">
        <li className="text-md h-full xs:py-2 sm:px-2 sm:text-2xl">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-md  h-full xs:py-2 sm:px-2  sm:text-2xl">
          <Link to={"/products"}>Products</Link>
        </li>
        <li className="hover text-md  h-full xs:py-2 sm:px-2 sm:text-2xl">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="flex items-center gap-2 sm:gap-6">
        <div
          className=" relative grid  items-center justify-center rounded-full p-1 hover:scale-[110%]  dark:text-amber-100"
          onClick={() => dispatch(toggleOverlay())}
        >
          <Badge>
            <AiOutlineShoppingCart
              className="h-8 w-8"
              cursor={"pointer"}
              height="100%"
            />
          </Badge>
          {count > 0 && (
            <span className="absolute bottom-[-.3rem] left-4 flex h-[1rem] w-[1rem]  items-center justify-center rounded-full bg-amber-500 text-xs  dark:bg-amber-500 dark:text-black">
              {count}
            </span>
          )}
        </div>
        <div>
          {!darkTheme && (
            <BsFillSunFill
              className="h-8 w-8 cursor-pointer text-blue-500"
              onClick={toggleThemes}
            />
          )}
          {darkTheme && (
            <BsMoonFill
              className="scale-[90%] cursor-pointer text-amber-100"
              onClick={toggleThemes}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
