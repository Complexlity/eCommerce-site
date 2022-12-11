import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js";
import { toggleOverlay } from "../store/overlay";
import { GrClose } from "react-icons/gr";
import CartItems from "./CartItems.js";
import { motion } from "framer-motion";

import { FC } from "react";
interface Props {}

const Cart: FC<Props> = () => {
  const overlay = useSelector((state: RootState) => state.overlay);
  const totalPrice = useSelector(
    (state: RootState) => state.counter.totalPrice
  );

  const dispatch = useDispatch();
  const body = document.querySelector("body")!;
  body.style.overflow = overlay ? "hidden" : "auto";

  function alertUser(): void {
    return totalPrice > 0
      ? alert("Thanks For Shopping With Us!! 😁😚")
      : alert("Buy something will you?");
  }

  function closeCart(): void {
    dispatch(toggleOverlay());
  }
  return (
    <>
      {overlay && (
        <div className="z-2 fixed inset-0  min-h-screen">
          <div
            className=" min-h- absolute inset-0 w-full bg-gray-800 opacity-[50%]"
            onClick={closeCart}
          ></div>
          <motion.div
            className=" absolute top-0 right-0 h-full w-[80%] max-w-[400px] bg-white opacity-[90%] dark:bg-gray-600 dark:text-gray-100 dark:opacity-[95%] md:w-[60%]"
            initial={{ translateX: "100%" }}
            animate={{ translateX: "0%" }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className="absolute left-4 top-4" onClick={closeCart}>
              <GrClose size={"30"} />
            </div>
            <div className="mt-4">
              <h1>Your Shopping Cart</h1>
              <CartItems />
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <button
                onClick={alertUser}
                className="mt-4 w-4/5 rounded-[5px] bg-orange-800 py-2 text-white"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Cart;
