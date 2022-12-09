import { FC, useState } from "react";
import longSleeve from "../assets/longSleeve.jpg";

interface Props {}

const Cards: FC<Props> = () => {
  return (
    <div className="my-grid md:w/4/5 mx-auto grid max-w-[900px] grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card: FC<Props> = () => {
  return (
    <div>
      <div className="h-[10rem] bg-blue-300">
        <img className="mx-auto h-full " src={longSleeve} alt="Long Sleeve" />
      </div>
      <p>Long Sleeve Cloth</p>
      <p>$100.99</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Cards;
