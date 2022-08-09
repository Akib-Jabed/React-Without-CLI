// import { Component } from "react";
import Card from "./card.component";

const CardList = ({monsters}) => {
	return (
		<div className="card-list">
			{
				monsters.map(monster => <Card key={monster.id} monster={monster} />)
			}
		</div>
	)
}
		
export default CardList;
