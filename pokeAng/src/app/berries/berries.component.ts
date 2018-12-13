import { Component, OnInit } from '@angular/core';
import { BerriesService } from "../berries.service"

@Component({
  selector: 'berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.css']
})
export class BerriesComponent implements OnInit {

   public name:string[];
   public service:BerriesService;

  constructor(service:BerriesService) {
     this.service = service;
 }

 ngOnInit():void {
    this.service.getPokeList().subscribe(
      (incomingList:string[]) => {
          this.name = incomingList;
      }
    );
 }

}
