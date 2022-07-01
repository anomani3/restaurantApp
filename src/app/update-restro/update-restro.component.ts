import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {

  editResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })

  constructor(private router:ActivatedRoute) { }
  

  ngOnInit(): void {
  }

}
