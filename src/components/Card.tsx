import { FC } from "react";
import { ShopItem } from "../interfaces/shopItem.js";
import Button from "./Button";

const Card: FC<ShopItem> = (props) => {
  const { title: name, id, image, price } = props;
  return (
    <div className="flex flex-col overflow-hidden rounded-md border-2 border-gray-400 dark:text-gray-200">
      <div className=" h-[10rem] bg-gray-200 py-1 dark:bg-gray-400">
        <img
          className="mx-auto h-full object-contain"
          src={`../assets/${image}`}
          alt={name}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between py-2 px-2 ">
        <div className="flex flex-1 flex-col justify-between">
          <p className="item-name text-start font-semibold">{name}</p>
          <p className="price text-start">${price}</p>
        </div>
        <div className="mt-1">
          <Button
            color="orange"
            rounding="2px"
            width="100%"
            name={name}
            id={id}
            price={price}
            image={image!}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
