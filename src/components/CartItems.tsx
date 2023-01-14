// Gettting Functional component type
import { FC } from "react";

/*--------------------------------
Redux Functions to read and update state. See https://redux-toolkit.js.org/tutorials/quick-start for more information about redux functions used in this code
------------------------------- */
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";

// Redux slices. See src/store for more information
import { addItem, removeItem } from "../store/slices/cartSlice";
import {
  decrement,
  decrementPrice,
  increment,
  incrementPrice,
} from "../store/slices/counterSlice.js";

// Shop items interfaces. See src/interfaces for more information
import { ShopItem } from "../interfaces/shopItem.js";
const CartItems: FC = () => {
  // Gets the current state of the cart items from the store. See src/store/cartSlice.js for more information
  const cartItems = useSelector((state: RootState) => state.cartList);
  const length = cartItems.length;
  return (
    <>
      {length == 0 ? (
        <div className="flex h-[10rem] items-center justify-center overflow-hidden text-xl italic md:text-2xl">
          {" "}
          No items added
        </div>
      ) : (
        <ul className="cart-list md:max-h-70vh mt-4 grid max-h-[60vh]  gap-4 overflow-y-auto p-2">
          {cartItems.map((items) => {
            return <Items key={items.id} items={items} />;
          })}
        </ul>
      )}
    </>
  );
};

interface Props {
  items: ShopItem;
}

// This returns a single cart items. It recieves a shop item as prop
const Items: FC<Props> = ({ items }) => {
  //Create function to update state data
  const dispatch = useDispatch();

  const { title: name, price, count, image } = items; // Destructure state data into variables

  // This function adds a new item to the cart store. See src/store/cartSlice.ts and src/store/counterSlice.ts for more information
  function addToCart(item: ShopItem): void {
    dispatch(addItem(item));
    dispatch(increment());
    dispatch(incrementPrice(item.price));
  }

  // This function removes an item from the cart store. See src/store/cartSlice.ts and src/store/counterSlice.ts for more information
  function removeFromCart(item: ShopItem): void {
    dispatch(removeItem(item));
    dispatch(decrement());
    dispatch(decrementPrice(item.price));
  }

  return (
    <li className="flex px-8">
      <div className="grid w-[40%] items-center justify-center">
        <img className="h-[8rem]" src={`../assets/${image}`} alt="" />
      </div>
      <div className="grid flex-1 gap-[1rem] p-2 ">
        <h1 className="item-name">{name}</h1>
        <p className="price text-lg">${price}</p>
        <div className=" flex items-center justify-center gap-3 ">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-400 dark:bg-white dark:text-black
          dark:hover:bg-gray-200"
            onClick={() => removeFromCart(items)}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => addToCart(items)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-400 pb-1 dark:bg-white
            dark:text-black dark:hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
