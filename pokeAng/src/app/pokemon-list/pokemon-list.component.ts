import { Component, OnInit } from '@angular/core';
import { PokemonListService } from "../pokemon-list.service"

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

   public pokeList:string[];
   public min:number = 0;
   public max:number = 21;
   private service:PokemonListService;

  constructor(service:PokemonListService) {
     this.service = service;
 }

  ngOnInit():void {
     this.service.getPokeList(this.min, this.max).subscribe(
        (incomingList:string[]) => {
           this.pokeList = incomingList;
        }
     );
  }

  public onPrevious() {
     this.min -= 20;
     this.max -= 20;

     this.service.getPokeList(this.min, this.max).subscribe(
        (incomingList:string[]) => {
           this.pokeList = incomingList;
        }
     );
 }
 public onNext() {
    this.min += 20;
    this.max += 20;

    this.service.getPokeList(this.min, this.max).subscribe(
      (incomingList:string[]) => {
          this.pokeList = incomingList;
      }
    );
}
}
