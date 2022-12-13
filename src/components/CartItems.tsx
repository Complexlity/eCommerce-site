import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { addItem, removeItem } from "../store/cart";
import {
  decrement,
  decrementPrice,
  increment,
  incrementPrice,
} from "../store/counterSlice.js";

import { ShopItem } from "../interfaces.js";

interface Props {
  items: ShopItem;
}

const CartItems: FC = () => {
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
        <ul className="cart-list mt-4 grid max-h-[70vh]  gap-4 overflow-y-auto p-2">
          {cartItems.map((items) => {
            return <Items key={items.id} items={items} />;
          })}
        </ul>
      )}
    </>
  );
};

const Items: FC<Props> = ({ items }) => {
  const dispatch = useDispatch();
  const { title: name, id, price, count, image } = items;

  function addToCart(item: ShopItem): void {
    dispatch(addItem(item));
    dispatch(increment());
    dispatch(incrementPrice(item.price!));
  }

  function removeFromCart(item: ShopItem): void {
    dispatch(removeItem(item));
    dispatch(decrement());
    dispatch(decrementPrice(item.price!));
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
