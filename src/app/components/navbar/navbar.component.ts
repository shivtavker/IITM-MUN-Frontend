import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen=false;

  constructor() { 

  }

  toggleNavbar(){ 
    this.navbarOpen=!this.navbarOpen;
  }

  ngOnInit() {
  }

  @HostListener("window:scroll",[])
  onWindowScroll(){

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if(number>50){
        
    }
    else{
      console.log("Stop scrolling dude");
    }
    
  }
}
