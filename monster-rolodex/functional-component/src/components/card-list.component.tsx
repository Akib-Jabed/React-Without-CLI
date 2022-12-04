import { Monster } from "../App";
import Card from "./card.component";

const CardList = ({ monsters }: { monsters: Monster[] }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
