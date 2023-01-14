// Gets the functional component type from react
import { FC } from "react";

/* -------------------
Redux Functions
See https://redux-toolkit.js.org/tutorials/quick-start for more information about redux functions used in this code
-------------------*/

import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice.js";
import { increment, incrementPrice } from "../store/slices/counterSlice.js";
//--------------------------------------------------

// Gets the shop item interface. See the src/components/interfaces folder for more infomation
import { ShopItem } from "../interfaces/shopItem.js";

// Creates the type of object the button object accepts
interface Props {
  color: string;
  rounding: string;
  width?: string;
  name: string;
  id: number;
  price: number;
  image: string;
}

const Button: FC<Props> = ({ rounding, width, name, id, price, image }) => {
  // Creates a dispatch object
  const dispatch = useDispatch();

  // Create a new shop item using the data passed into the button
  const newItem: ShopItem = { title: name, id, price, image };

  // This function takes a shop items and adds it to our redux store. See src/components/store/slices/cartSlice.ts
  // It also increments the current price shown on the cart. See src/components/store/slices/counterSlice.ts
  function addToCart(item: ShopItem): void {
    dispatch(addItem(item));
    dispatch(increment());
    dispatch(incrementPrice(item.price!));
  }

  const style: { borderRadius: string; width?: string } = {
    borderRadius: rounding,
    width: width,
  };
  return (
    <button
      style={style}
      className="bg-yellow-500 py-2 text-center hover:text-white hover:opacity-[80%] dark:bg-yellow-600"
      onClick={() => {
        addToCart(newItem);
        alert("Item added. Go to cart to view all items");
      }}
    >
      Add To Cart
    </button>
  );
};

export default Button;
