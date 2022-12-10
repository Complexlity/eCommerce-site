import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { addItem } from "../store/cart.js";
import { increment } from "../store/counterSlice.js";
import { store } from "../store/index.js";

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
  const dispatch = useDispatch();
  const newItem = { name: name, id: id, price: price };
  // console.log(name);
  // console.log(id);

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
        dispatch(addItem(newItem));
        dispatch(increment());
      }}
    >
      Add To Cart
    </button>
  );
};

export default Button;
