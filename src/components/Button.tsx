import { FC } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice.js";
import { increment, incrementPrice } from "../store/slices/counterSlice.js";
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

const Button: FC<Props> = ({ rounding, width, name, id, price, image }) => {
  const dispatch = useDispatch();
  const newItem: ShopItem = { title: name, id, price, image };

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
