import { Component, OnInit, Input } from '@angular/core';
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


   public name:string;
   public img:string;
   public moves:string[];
   private service:PokemonService;
   public state:string = "none";

  constructor(service:PokemonService) {
     this.service = service;
 }

  @Input() PokemonListComponent:PokemonListComponent;
  @Input() public url:string;

  ngOnInit():void {
     this.service.getPokeList(this.url).subscribe(
       (incoming:any) => {
          console.log(incoming);
          this.name = incoming.name;
          this.img = incoming.sprite;
          this.moves = incoming.moves;
       },
    )

  }

  public onClick():void {
     if (this.state == "none") this.state = "block";
     else this.state = "none";
 }

}
