import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdService implements OnInit{
  constructor() { }
  ad= [
    { title: 'sofa', name: 'four wheeler sofa', category: 'furniture', description: 'ikea Furniture' },
    { title: 'sofa', name: 'four wheeler sofa', category: 'furniture', description: 'ikea Furniture' },
    { title: 'sofa', name: 'four wheeler sofa', category: 'furniture', description: 'ikea Furniture' },
    { title: 'sofa', name: 'four wheeler sofa', category: 'furniture', description: 'ikea Furniture' },
  ]; 
  ngOnInit(): void {
    this.ad=this.ad;
  }
  getad():any{
    return this.ad;
  }
  setad(ad:any,data:any){
    this.ad.push(data);
    ad=this.ad;
  }
  deletead(ad:any){
    this.ad=ad;
  }
  editad(ad:any){
    this.ad=ad;
  }

}


