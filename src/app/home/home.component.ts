import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  navItems:Object;

  constructor() { }

  ngOnInit() {
    this.navItems=[
      {name:'Child',route:'/child'},
      {name:'Role Add',route:'/role/add'},
      {name: 'Angular2-notification', route:'/Angular2-notification' },

    ]
  }
}
