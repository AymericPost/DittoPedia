import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BerriesService {

   private client:HttpClient;

  constructor(client:HttpClient,) {
     this.client = client;
  }

  public getPokeList():Observable<any> {
     const listObs:Observable<any> = this.client.get("https://pokeapi.co/api/v2/berry/");

     const incomingListTreatment = (data:any):string[] => {
        let result:string[] = [];
        let current:string;

        for(let i = 0 ; i < data.results.length ; i++) {
           current = "";

           current = data.results[i].name;
           result.push(current);
        }

        return result;
     }

     return listObs.pipe( map( incomingListTreatment ));
 }
}
