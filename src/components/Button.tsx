import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { addItem } from "../store/cart.js";
import { increment, incrementPrice } from "../store/counterSlice.js";
import { store } from "../store/index.js";
import { ShopItem } from "../interfaces.js";

interface Props {
  color: string;
  rounding: string;
  width?: string;
  name: string;
  id: number;
  price: number;
}

const Button: FC<Props> = ({ color, rounding, width, name, id, price }) => {
  const itemsList = useSelector((state: RootState) => state.cartList);
  const totalPrice = useSelector(
    (state: RootState) => state.counter.totalPrice
  );
  const dispatch = useDispatch();
  const newItem: ShopItem = { name: name, id: id, price: price };

  function addToCart(item: ShopItem): void {
    dispatch(addItem(item));
    dispatch(increment());
    dispatch(incrementPrice(item.price!));
  }

  const style: any = {
    backgroundColor: color,
    borderRadius: rounding,
    width: width,
  };
  return (
    <button
      style={style}
      className="py-2  text-center hover:text-white hover:opacity-[80%]"
      onClick={() => {
        addToCart(newItem);
      }}
    >
      Add To Cart
    </button>
  );
};

export default Button;
