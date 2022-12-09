import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { increment, decrement } from "../store/counterSlice";

interface Props {
  color: string;
  rounding: string;
  width?: string;
}

const Button: FC<Props> = ({ color, rounding, width }) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const style: any = {
    backgroundColor: color,
    borderRadius: rounding,
    width: width,
  };
  return (
    <button
      style={style}
      className="py-2  text-center hover:text-white hover:opacity-[80%]"
      onClick={() => dispatch(increment())}
    >
      Add To Cart
    </button>
  );
};

export default Button;
