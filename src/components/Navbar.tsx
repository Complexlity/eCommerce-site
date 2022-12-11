import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillGithub } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import type { RootState } from "../store/index.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/theme.js";
import { toggleOverlay } from "../store/overlay.js";
import { Badge } from "@mui/material";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const overlay = useSelector((state: RootState) => state.overlay);
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  const dispatch = useDispatch();
  const toggleThemes = () => dispatch(toggleTheme());
  return (
    <nav className="mx-auto flex items-center justify-between border-sky-800 bg-gray-200 py-3 px-4 text-xl shadow-md dark:border-b-[2px] dark:bg-cyan-900 dark:text-gray-300 md:text-2xl">
      <div className="sm:h-[2.5rem] sm:w-[2.5rem]">
        <VscGithub className="h-full w-full" size={"2rem"} />
        {/* {darkTheme && <VscGithub size={"2.5rem"} />} */}
        {/* {!darkTheme && <AiFillGithub size={"2.5rem"} />} */}
      </div>
      <ul className="mx-auto flex items-center justify-end gap-2 sm:gap-4">
        <li className="h-full  py-2 sm:px-2">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="h-full  py-2  sm:px-2">
          <Link to={"/products"}>Products</Link>
        </li>
        <li className="hover h-full  py-2  sm:px-2">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="flex items-center gap-2 sm:gap-6">
        <div
          className=" relative grid  items-center justify-center rounded-full p-1 hover:scale-[110%] dark:bg-blue-900 dark:text-white"
          onClick={() => dispatch(toggleOverlay())}
        >
          <Badge>
            <AiOutlineShoppingCart cursor={"pointer"} height="100%" />
          </Badge>
          {count > 0 && (
            <span className="absolute bottom-[-.3rem] left-4 flex h-[1rem] w-[1rem]  items-center justify-center rounded-full bg-red-500 text-xs dark:bg-red-700 dark:text-gray-200">
              {count}
            </span>
          )}
        </div>
        <div>
          {!darkTheme && (
            <BsFillSunFill
              className="cursor-pointer text-blue-500"
              onClick={toggleThemes}
            />
          )}
          {darkTheme && (
            <BsMoonFill
              className="cursor-pointer text-blue-400"
              onClick={toggleThemes}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
