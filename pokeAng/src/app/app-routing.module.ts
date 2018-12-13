import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { BerriesComponent } from "./berries/berries.component";

const routes: Routes = [
   { path: '', redirectTo: '/pokedex', pathMatch:'full' },
   { path: 'pokedex', component: PokemonListComponent },
   { path: 'berries', component: BerriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
