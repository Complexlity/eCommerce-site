import { FC, useState } from "react";
import longSleeve from "../assets/longSleeve.jpg";
import Button from "./Button";

interface Props {}

const Card: FC<Props> = () => {
  return (
    <div className="overflow-hidden rounded-md border-2 border-black">
      <div className="h-[10rem] bg-blue-300 py-1">
        <img className="mx-auto h-full" src={longSleeve} alt="Long Sleeve" />
      </div>
      <div className="grid gap-2 py-2 px-2 ">
        <p className="text-start">Long Sleeve Cloth</p>
        <p className="text-start">$100.99</p>
        <Button color="orange" rounding="2px" width="100%" />
      </div>
    </div>
  );
};

export default Card;
