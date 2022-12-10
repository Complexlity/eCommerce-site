import { FC, useState } from "react";
import { ShopItem } from "../interfaces";
import Button from "./Button";

const Card: FC<ShopItem> = (props) => {
  const { name, id, image, price: price } = props;
  return (
    <div className="overflow-hidden rounded-md border-2 border-black">
      <div className="h-[10rem] bg-blue-300 py-1">
        <img className="mx-auto h-full" src={image} alt="Long Sleeve" />
      </div>
      <div className="grid gap-2 py-2 px-2 ">
        <p className="text-start">{name}</p>
        <p className="text-start">{price}</p>
        <Button
          color="orange"
          rounding="2px"
          width="100%"
          name={name}
          id={id}
          price={price!}
        />
      </div>
    </div>
  );
};

export default Card;
