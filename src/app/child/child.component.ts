import { Component, OnInit } from '@angular/core';
import {CoreService} from '../shared/core.service'; 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(
    private _core :CoreService
  ) { }

  ngOnInit() {
    
  }

  onAlert(title,message,type){
    this._core.onShow(title,message,type);
  }

}
