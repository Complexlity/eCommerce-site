import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { addToCart } from "../store/cart";
import { increment } from "../store/counterSlice.js";
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
  const counts = useSelector((state: RootState) => state.counter);
  const { name, id, price, count } = items;
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
          >
            -
          </button>
          <p>{count}</p>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-400 pb-1"
            // onClick={() => dispatch(removeFromCart(id))}
            onClick={() => {
              dispatch(addToCart(id));
              dispatch(increment());
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
