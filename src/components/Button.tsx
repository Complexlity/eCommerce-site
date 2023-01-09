import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { addItem } from "../store/cart.js";
import { increment, incrementPrice } from "../store/counterSlice.js";
import { ShopItem } from "../interfaces/shopItem.js";

interface Props {
  color: string;
  rounding: string;
  width?: string;
  name: string;
  id: number;
  price: number;
  image: string;
}

const Button: FC<Props> = ({
  color,
  rounding,
  width,
  name,
  id,
  price,
  image,
}) => {
  const itemsList = useSelector((state: RootState) => state.cartList);
  const totalPrice = useSelector(
    (state: RootState) => state.counter.totalPrice
  );
  const dispatch = useDispatch();
  const newItem: ShopItem = { title: name, id, price, image };

  function addToCart(item: ShopItem): void {
    dispatch(addItem(item));
    dispatch(increment());
    dispatch(incrementPrice(item.price!));
  }

  const style: any = {
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
