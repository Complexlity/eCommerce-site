import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { toggleOverlay } from "../store/overlay";
import { incrementPrice, decrementPrice } from "../store/counterSlice.js";
import { GrClose } from "react-icons/gr";
import CartItems from "./CartItems.js";

import { FC } from "react";
interface Props {}

const Cart: FC<Props> = () => {
  const overlay = useSelector((state: RootState) => state.overlay);
  const totalPrice = useSelector(
    (state: RootState) => state.counter.totalPrice
  );

  const dispatch = useDispatch();

  function alertUser() {
    return totalPrice > 0
      ? alert("Thanks For Shopping With Us!! 😁😚")
      : alert("Buy something will you?");
  }
  return (
    <>
      {overlay && (
        <div className="z-2 fixed inset-0  h-screen">
          <div className=" absolute inset-0 h-full w-full bg-gray-800 opacity-[80%]"></div>
          <div className=" absolute top-0 right-0 h-full w-[80%] max-w-[400px] bg-white opacity-[100%] md:w-[60%]">
            <div
              className="absolute left-4 top-4"
              onClick={() => dispatch(toggleOverlay())}
            >
              <GrClose size={"30"} />
            </div>
            <div className="mt-4">
              <h1>Your Shopping Cart</h1>
              <CartItems />
              <p>Total: ${totalPrice}</p>
              <button
                onClick={alertUser}
                className="rounded-[5px] bg-orange-800 px-4 py-2 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
