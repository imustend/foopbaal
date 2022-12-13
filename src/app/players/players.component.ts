import { Component } from '@angular/core';
import { Player } from '../player';
import { Position } from '../position';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
	formActive = false;
	newPlayerName = "";
	newPlayerNumber = 0;
	newPlayerPosition: Position = 'Forward';
	playerList: Player[] = [];
	something = this.playerList.find((player) => player.number === this.newPlayerNumber);

	check() {
		this.something = this.playerList.find((player) => player.number === this.newPlayerNumber);
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
	}

	addPlayer() {
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

		this.newPlayerName = "";
		this.newPlayerNumber = 0;
		this.newPlayerPosition = 'Forward';

		this.closeForm();
  }
}
