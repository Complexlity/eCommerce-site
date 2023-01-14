// Function used for client side routing between pages
import { Link } from "react-router-dom";

// Redux functions to read and update the store state. See https://redux-toolkit.js.org/tutorials/quick-start for more information about redux functions used in this code
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";

// Getting the slice functions. See src/store/themeSlice.js as well as src/store/overlaySlice.js for more information
import { toggleTheme } from "../store/slices/themeSlice.js";
import { toggleOverlay } from "../store/slices/overlaySlice.js";

// React Icons. See https://react-icons.github.io/react-icons/ for more information
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.counter.value); // Used to show the number on the cart icon
  const darkTheme = useSelector((state: RootState) => state.darkTheme); // Reads theme data from redux store

  // Creates a function to update the theme value from the store. See src/store/themeSlice.ts
  const dispatch = useDispatch();
  const toggleThemes = () => dispatch(toggleTheme());

  // Updates the value of the css root variable based on the current theme. See src/styles/index.css for the usage of this variable
  const brightnessValue = darkTheme ? "80%" : "40%";
  document.documentElement.style.setProperty("--brightness", brightnessValue);

  // Creates custom tailwind styling to apply to each to the links
  const linkStyle =
    "text-md h-full xs:py-2 sm:px-2 sm:text-2xl  border-cyan-900 dark:border-gray-200";

  const body = document.querySelector("body")!; // Gets the body element which is later used to remove overflow when the cart is open
  return (
    <nav className="mx-auto flex items-center justify-between  border-b-[2px] border-gray-200 bg-gray-200 py-1 px-4 text-xl text-cyan-900 shadow-md dark:border-sky-800 dark:bg-cyan-900 dark:text-gray-300 xs:py-3 md:px-8 md:text-2xl">
      <div className="h-8 w-8 sm:h-[2.5rem] sm:w-[2.5rem]">
        <a
          href="https://github.com/Complexlity/eCommerce-site"
          target={"_blank"}
        >
          <VscGithub className="h-full w-full" />
        </a>
      </div>
      <ul className="mx-auto flex flex-col items-center justify-end gap-1 xs:flex-row xs:gap-4">
        <li className={linkStyle}>
          <Link to={"/"} className="pages">
            Home
          </Link>
        </li>
        <li className={linkStyle}>
          <Link to={"/products"} className="pages">
            Products
          </Link>
        </li>
        <li className={linkStyle}>
          <Link to={"/contact"} className="pages">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-2 sm:gap-6">
        <div
          className=" relative grid  items-center justify-center rounded-full p-1 hover:scale-[110%]  dark:text-amber-100"
          onClick={() => {
            dispatch(toggleOverlay());
            body.style.overflowY = "hidden";
          }}
        >
          <AiOutlineShoppingCart
            className="h-8 w-8"
            cursor={"pointer"}
            height="100%"
          />
          {count > 0 && (
            <span className="absolute bottom-[-.3rem] left-4 flex h-[1rem] w-[1rem]  items-center justify-center rounded-full bg-amber-500 text-xs  dark:bg-amber-500 dark:text-black">
              {count}
            </span>
          )}
        </div>
        <div>
          {!darkTheme && (
            <BsFillSunFill
              className="h-6 w-6 cursor-pointer text-blue-500"
              onClick={toggleThemes}
            />
          )}
          {darkTheme && (
            <BsMoonFill
              className="h-6 w-6 scale-[90%] cursor-pointer text-amber-100"
              onClick={toggleThemes}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
