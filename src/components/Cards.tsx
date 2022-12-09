import { FC } from "react";
import Card from "./Card";
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

export default Cards;
