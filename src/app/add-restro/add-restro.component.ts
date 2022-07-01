import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {
  alert:Boolean=false
  addRestro=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')

  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collectResto(){
    // console.warn(this.addRestro.value)
    this.resto.saveResto(this.addRestro.value).subscribe((result: any)=>{
      console.warn("Result is here",result);
      this.alert=true;
      this.addRestro.reset({});
    })
    

  }
  closeAlert(){
    this.alert=false;
    
  }

}
