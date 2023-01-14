//Redux function and interface to read the store data
import { useSelector } from "react-redux";
import { RootState } from "../store/index.js";

// Component containing all the cards
import Cards from "../components/Cards";

const Products = () => {
  // Gets the current state date which is used to update the colors accordingly
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="px-4 pt-[2rem] dark:bg-cyan-900">
        <Cards />
      </div>
    </div>
  );
};

export default Products;
