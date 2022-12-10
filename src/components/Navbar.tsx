import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import type { RootState } from "../store/index.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleOverlay } from "../store/overlay.js";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const overlay = useSelector((state: RootState) => state.overlay);
  const dispatch = useDispatch();
  return (
    <ul className="mx-auto mb-2 flex w-4/5 items-center justify-end bg-green-300 px-4 text-2xl">
      <li className="h-full bg-green-700 py-2 px-2 hover:bg-green-400 hover:text-gray-200">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="h-full bg-green-700 py-2  px-2 hover:bg-green-400 hover:text-gray-200">
        <Link to={"/products"}>Products</Link>
      </li>
      <li className="h-full bg-green-700 py-2  px-2 hover:bg-green-400 hover:text-gray-200">
        <Link to={"/contact"}>Contact</Link>
      </li>
      <li className="ml-2 h-full">
        <div
          className=" relative grid  items-center justify-center rounded-full bg-blue-500 p-1 hover:scale-[110%]"
          onClick={() => dispatch(toggleOverlay())}
        >
          <AiOutlineShoppingCart cursor={"pointer"} height="100%" />
          <span className="absolute bottom-[-.3rem] left-4 flex h-[1rem] w-[1rem]  items-center justify-center rounded-full bg-red-500 text-xs">
            {count}
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Navbar;
