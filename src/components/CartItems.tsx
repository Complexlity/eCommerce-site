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
import longSleeve from "../assets/longSleeve.jpg";
import { ShopItem } from "../interfaces.js";

// interface Props {
// }

interface Props {
  items: ShopItem;
}

const CartItems: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cartList);
  return (
    <ul className="mt-4 grid gap-4 p-2">
      {cartItems.map((items) => {
        return <Items key={items.id} items={items} />;
      })}
    </ul>
  );
};

const Items: FC<Props> = ({ items }) => {
  const dispatch = useDispatch();
  const { name, id, price, count } = items;

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
    <li className="flex">
      <div className="grid w-[40%] items-center justify-center">
        <img className="h-[8rem]" src={longSleeve} alt="" />
      </div>
      <div className="grid flex-1 gap-1 p-2 ">
        <h1>{name}</h1>
        <p>{price}</p>
        <div className=" flex items-center justify-center gap-3 ">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md
          bg-gray-400"
            onClick={() => removeFromCart(items)}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => addToCart(items)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-400 pb-1"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
