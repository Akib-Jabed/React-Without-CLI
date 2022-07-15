const roads = [
	"Alice's House-Bob's House",
	"Alice's House-Post Office",
	"Daria's House-Ernie's House",
	"Ernie's House-Grete's House",
	"Grete's House-Shop",
	"Marketplace-Post Office",
	"Marketplace-Town Hall",
	"Alice's House-Cabin",
	"Bob's House-Town Hall",
	"Daria's House-Town Hall",
	"Grete's House-Farm",
	"Marketplace-Farm",
	"Marketplace-Shop",
	"Shop-Town Hall"
];

function buildGraph(edges) {
	let graph = Object.create(null);
	function addEdge(from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}
	
	for (let [from, to] of edges.map(road => road.split("-"))) {
		addEdge(from, to);
		addEdge(to, from);
	}
	
	return graph;
}

const roadGraph = buildGraph(roads);


class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}
	
	move(destination) {
		if (!roadGraph[this.place].includes(destination)) {
			return this;
		}
		// get the undelivered parcels
		let parcels = this.parcels.map(parcel => {
			// parcels that not seem to delivered this place
			if (parcel.place != this.place)
			return parcel;
			// parcels that seem to delivered this place
			return {place: destination, address: parcel.address}
		}).filter(parcel => parcel.place != parcel.address);
		
		return new VillageState(destination, parcels);
	}
}

function runRobot(state, robot) {
	for (let turn = 0; ; turn++) {
		if (state.parcels.length == 0) {
			console.log(`Done in ${turn} turns.`);
			break;
		}
		let action = robot(state);
		state = state.move(action.direction);
		console.log(`Moved to ${action.direction}`);
	}
}

function randomPick(array) {
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

function randomRobot(state) {
	return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	// randomly generate parcels where pick-up place and destinaion address is not same
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(roadGraph));
		let place;
		do {
			place = randomPick(Object.keys(roadGraph));
		} while (place == address);
		parcels.push({place, address});
	}
	
	return new VillageState("Post Office", parcels);
}

runRobot(VillageState.random(), randomRobot);
