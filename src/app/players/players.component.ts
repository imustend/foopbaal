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

	openForm() {
		this.formActive = true;
	}

	closeForm() {
		this.formActive = false;
	}

	addPlayer() {
		if(this.newPlayerName === "") {
			alert("Name cannot be empty");
			return;
		}

		if(1 > this.newPlayerNumber || this.newPlayerNumber > 99) {
			alert("Number has to be between 1 and 99");
			return;
		}

		if(this.playerList.find((player) => player.number === this.newPlayerNumber)) {
			alert("Number already exists");
			return;
		}

		const newPlayer: Player = {
			name: this.newPlayerName,
			number: this.newPlayerNumber,
			position: this.newPlayerPosition
		};

		this.newPlayerName = "";
		this.newPlayerNumber = 0;
		this.newPlayerPosition = 'Forward';

		this.closeForm();
  }
}
