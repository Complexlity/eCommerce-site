import Card from "./Card";

// Gets the state interface from the store. See src/store/index.ts
import type { RootState } from "../store/index.js";

// Import function to read data from the store. See https://redux-toolkit.js.org/tutorials/quick-start for more information
import { useSelector } from "react-redux";

// This function reads the card items and loops through to output each of them as a card. See Card.tsx for more information
const Cards = () => {
  const allItems = useSelector((state: RootState) => state.itemsList);
  return (
    <div className="my-grid md:w/4/5 mx-auto grid max-w-[1100px] gap-4 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
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
