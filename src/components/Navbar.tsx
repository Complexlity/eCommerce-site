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
    <nav className="flex items-center justify-between py-3 px-4 text-2xl shadow-md">
      <div>
        {!darkTheme && <AiFillGithub />}
        {darkTheme && <VscGithub />}
      </div>
      <ul className="mx-auto flex items-center justify-end gap-4">
        <li className="h-full  py-2 px-2">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="h-full  py-2  px-2">
          <Link to={"/products"}>Products</Link>
        </li>
        <li className="hover h-full  py-2  px-2">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="ml-2 h-full"></li>
      </ul>
      <div className="flex items-center gap-6">
        <div
          className=" relative grid  items-center justify-center rounded-full bg-gray-200 p-1 hover:scale-[110%]"
          onClick={() => dispatch(toggleOverlay())}
        >
          <Badge>
            <AiOutlineShoppingCart cursor={"pointer"} height="100%" />
          </Badge>
          {count > 0 && (
            <span className="absolute bottom-[-.3rem] left-4 flex h-[1rem] w-[1rem]  items-center justify-center rounded-full bg-red-500 text-xs">
              {count}
            </span>
          )}
        </div>
        <div>
          {!darkTheme && (
            <BsFillSunFill className="cursor-pointer" onClick={toggleThemes} />
          )}
          {darkTheme && (
            <BsMoonFill className="cursor-pointer" onClick={toggleThemes} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
