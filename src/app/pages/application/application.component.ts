import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
form=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
});

  constructor() { }

  ngOnInit() {
  }
  
}
