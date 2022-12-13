import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Position } from '../position';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
	formActive = false;
	newPlayerName = "";
	newPlayerNumber = 0;
	newPlayerPosition: Position = 'Forward';
	playerList: Player[] = [];
	something = this.playerList.find((player) => player.number === this.newPlayerNumber);
	url = "https://football-ba404-default-rtdb.europe-west1.firebasedatabase.app/players";

	constructor(private httpClient: HttpClient){}

	ngOnInit(): void {
		this.fetchPlayers();
		console.log(this.playerList);
  	}

	fetchPlayers() {
		this.httpClient.get<Player[]>(this.url+".json").subscribe((data) => {
			this.playerList = data;
		});

		if (this.playerList == null) {
			this.playerList = [];
		}
	}

	update() {
		this.httpClient.delete<Player[]>(this.url+".json").subscribe();
		console.log(this.playerList);
		this.httpClient.put(this.url+".json", this.playerList).subscribe();
	}

	check() {
		// this.something = this.playerList.find((player) => player.number === this.newPlayerNumber);
	}

	openForm() {
		this.formActive = !this.formActive;
	}

	closeForm() {
		this.formActive = false;
	}

	log(number: number) {
		const p = this.playerList.find((p) => {
			return p.number === number;
		});

		console.log(p?.name);
	}

	deletePlayer(number: number) {
		const p = this.playerList.find((p) => {
			return p.number === number;
		});
		if (p === undefined) {
			console.error("what?");
			return;
		}
		const i = this.playerList.indexOf(p);
		this.playerList.splice(i, 1);

		this.update();
	}

	addPlayer() {
		if (this.playerList == null) {
			this.playerList = [];
		}

		if(this.newPlayerName === "") {
			alert("Name cannot be empty");
			return;
		}

		if(0 > this.newPlayerNumber || this.newPlayerNumber > 99) {
			alert("Number has to be between 1 and 99");
			return;
		}

		if(this.playerList.find((player) => player.number === this.newPlayerNumber)) {
			alert("Player with that number already exists");
			return;
		}

		const newPlayer: Player = {
			name: this.newPlayerName,
			number: this.newPlayerNumber,
			position: this.newPlayerPosition
		};

		this.playerList.push(newPlayer);

		this.playerList.sort((a, b) => a.number - b.number);

		this.update();

		this.newPlayerName = "";
		this.newPlayerNumber = 0;
		this.newPlayerPosition = 'Forward';

		this.closeForm();
  }
}
