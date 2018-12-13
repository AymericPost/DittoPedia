import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

   private client:HttpClient;

  constructor(client:HttpClient,) {
     this.client = client;
  }

  public getPokeList(url):Observable<any> {
     const listObs:Observable<any> = this.client.get(url);

     const pokemonTreatment = (data:any):any => {

        let result:any = { name: "", sprite:"", moves: [] };
        let moves:string[] = [];

        result.name = data.name;
        result.name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
        result.sprite = data.sprites.front_default;

        for(let i = 0 ; i < data.moves.length ; i++) {
           moves.push(data.moves[i].move.name);
        }
        result.moves = moves;

        return result;
     }

     return listObs.pipe( map( pokemonTreatment ));
 }
}
