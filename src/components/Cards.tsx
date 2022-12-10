import { FC } from "react";
import Card from "./Card";
import type { RootState } from "../store/index.js";
import { useSelector } from "react-redux";
import { Root } from "react-dom/client";

interface Props {}

const Cards: FC<Props> = () => {
  const allItems = useSelector((state: RootState) => state.itemsList);
  return (
    <div className="my-grid md:w/4/5 mx-auto grid max-w-[900px] grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
      {allItems.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          price={item.price}
          name={item.name}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Cards;
