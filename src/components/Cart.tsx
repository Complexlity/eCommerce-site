/*----------------------------------
Redux Functions. See https://redux-toolkit.js.org/tutorials/quick-start for more information 
------------------------------------ */
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index.js"; // State interface

// Redux slices. See src/store for more information
import { toggleOverlay } from "../store/slices/overlaySlice.js";
import { resetCart } from "../store/slices/cartSlice.js";
import { resetAll } from "../store/slices/counterSlice.js";

import CartItems from "./CartItems.js"; // See CartItems.js for more information
import { GrClose } from "react-icons/gr"; // Close icon
import { useEffect } from "react";

const Cart = () => {
  // Creates the state from the current redux store values
  const overlay = useSelector((state: RootState) => state.overlay);
  const totalPrice = useSelector(
    (state: RootState) => state.counter.totalPrice
  );

  const dispatch = useDispatch();
  const body = document.querySelector("body")!;
  const divStyle = overlay ? "open" : "closed";
  const overlayStyle = overlay ? "block" : "hidden";

  // Changes the overflow when cart is open. This is more directed towards an error I had on safari mobile with the cart
  useEffect(() => {
    if (overlay) {
      body.style.position = "fixed";
    } else {
      body.style.position = "relative";
      body.style.overflowY = "auto";
      body.style.overflowX = "hidden";
    }
  }, [overlay]);

  // Function to give message when the user checks out. This could be re-written to do something more interactive
  function alertUser(): void {
    if (totalPrice > 0) {
      dispatch(resetCart());
      dispatch(toggleOverlay());
      dispatch(resetAll());
      alert("Thanks For Shopping With Us!! 😁😚");
    } else alert("Buy something will you?");
  }

  // Function to close the cart
  function closeCart(): void {
    dispatch(toggleOverlay());
  }
  return (
    <>
      {overlay && (
        <div className="z-2 fixed inset-0 min-h-screen  overflow-hidden"></div>
      )}
      <div
        className={
          overlayStyle +
          " absolute inset-0 min-h-screen w-full overflow-hidden bg-gray-800 opacity-[50%]"
        }
        onClick={closeCart}
      ></div>
      <div
        className={
          divStyle +
          " cart absolute inset-0 h-full w-[100%]  max-w-[600px] overflow-hidden bg-white opacity-[90%] dark:bg-gray-600 dark:text-gray-100 dark:opacity-[95%] xs:inset-auto xs:top-0 xs:right-0 xs:w-[80%] md:w-[65%]"
        }
      >
        <div
          className="absolute left-4 top-4 cursor-pointer"
          onClick={closeCart}
        >
          <GrClose size={"30"} />
        </div>
        <div className="ml-4 mt-4 overflow-hidden xs:ml-0 xs:mt-4">
          <h1 className="heading text-xl xs:text-2xl">Your Shopping Cart</h1>
          <CartItems />
          <p className="mt-e">
            <span className="heading text-xl font-semibold">TOTAL</span>:
            <span className="price text-2xl">
              {" "}
              ${parseFloat(totalPrice.toFixed(2))}
            </span>
          </p>
          <button
            onClick={alertUser}
            className="mt-3 w-4/5 rounded-[5px] bg-green-900 py-2 text-white dark:text-gray-200"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
