import { Component, OnInit } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-angular2-notification',
  templateUrl: './angular2-notification.component.html',
  
})
export class Angular2NotificationComponent implements OnInit {

  options={
    position:["top","right"],
    timeOut:5000,
    pauseOnHover:true,
    animate:"rotate"
  };

  constructor(
    private _service: NotificationsService
  ) { }

  ngOnInit() {
  }

  onShow(type){
    this._service.remove();
    switch(type){
      case 'success':
          this._service.success('KRA','Grade added sucsesfully');
          break;
      case 'error':
          this._service.error('Something wrong','We are working on it',{icons:null});
          break;
      default:
          this._service.success('Test','Default');
          break;
    }
  }

}
