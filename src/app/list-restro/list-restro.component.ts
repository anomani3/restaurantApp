import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'


@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {

  constructor(private resto:RestoService) {

   }
   collection: any=[];

  ngOnInit(): void {
    this.resto.getlist().subscribe((result)=>{
      console.warn(result);
      this.collection=result;

    })
   
  }
  deleteResto(item: any){
    this.collection.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn("result",result)
    })

    


  }

}
function deleteResto(item: any) {
  throw new Error('Function not implemented.');
}

function item(item: any) {
  throw new Error('Function not implemented.');
}

