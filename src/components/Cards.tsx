import { FC } from "react";
import Card from "./Card";
import type { RootState } from "../store/index.js";
import { useSelector } from "react-redux";

interface Props {}

const Cards: FC<Props> = () => {
  const allItems = useSelector((state: RootState) => state.itemsList);
  return (
    <div className="my-grid md:w/4/5 mx-auto grid max-w-[1100px] grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
      {allItems.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Cards;
