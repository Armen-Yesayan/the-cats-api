import { FC } from "react";

import c from "./cards.module.css";

interface CardsProps {
  image: string;
}
const Cards: FC<CardsProps> = ({ image }): JSX.Element => {
  return (
    <div className={c.Cards}>
      <img src={image} alt='' width={"100%"} height={"100%"} />
    </div>
  );
};

export default Cards;
