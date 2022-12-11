import { FC, useState } from "react";
import { ShopItem } from "../interfaces";
import Button from "./Button";

const Card: FC<ShopItem> = (props) => {
  const { title: name, id, image, price: price } = props;
  return (
    <div className="grid overflow-hidden rounded-md border-2 border-black">
      <div className=" h-[10rem] bg-blue-300 py-1">
        <img
          className="mx-auto h-full object-contain"
          src={`./src/assets/${image}`}
          alt={name}
        />
      </div>
      <div className="flex flex-col justify-between py-2 px-2 ">
        <div className="grid gap-2  ">
          <p className="text-start">{name}</p>
          <p className="text-start">${price}</p>
        </div>
        <div className="mt-1">
          <Button
            color="orange"
            rounding="2px"
            width="100%"
            name={name}
            id={id}
            price={price!}
            image={image!}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
