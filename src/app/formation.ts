export class Formation {
	defenders: number = 4;
	midfielders: number = 4;
	forwards: number = 2;
}

export function newFormation(defenders: number, midfielders: number, forwards: number): [Formation, boolean] {
	if (defenders + midfielders + forwards != 10) {
		return [{defenders: 4, midfielders: 4, forwards: 2}, false]
	}
	return [{defenders: defenders, midfielders: midfielders, forwards: forwards}, true]
}