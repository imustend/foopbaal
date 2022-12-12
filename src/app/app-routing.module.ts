import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { OutOfBoundsComponent } from './out-of-bounds/out-of-bounds.component';
import { PlayersComponent } from './players/players.component';
import { SquadComponent } from './squad/squad.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'players', component: PlayersComponent},
  { path: 'squad', component: SquadComponent},
  { path: '**', component: OutOfBoundsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
