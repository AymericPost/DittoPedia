import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokemonListService {

   private client:HttpClient;

  constructor(client:HttpClient,) {
     this.client = client;
  }

  public getPokeList(min, max):Observable<any> {
     const listObs:Observable<any> = this.client.get("https://pokeapi.co/api/v2/pokemon/");

     const incomingListTreatment = (data:any):string[] => {
        let result:string[] = [];
        let current:string;

        for(let i = min; i < max ; i++) {
           current = "";

           current = data.results[i].url;
           result.push(current);
        }

        return result;
     }

     return listObs.pipe( map( incomingListTreatment ));
 }
}
