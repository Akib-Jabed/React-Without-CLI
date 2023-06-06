import { Component } from "react";
import Card from "./card.component";



export default class CardList extends Component {
	render() {
		const { monsters } = this.props;
		
		return (
			<div className="card-list">
			{
				monsters.map(monster => <Card monster={monster} />)
			}
			</div>
			)
		}
	}
	