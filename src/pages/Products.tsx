import Cards from "../components/Cards";
import { RootState } from "../store/index.js";
import { useSelector } from "react-redux";

const Products = () => {
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
