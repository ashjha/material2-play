import { Injectable } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable()
export class CoreService {


  constructor(
    private _notify: NotificationsService
  ) { }

  onShow(title,message,type){
    this._notify.remove();
    switch(type){
      case 1:
          this._notify.success(title,message);
          break;
      case 0:
          this._notify.error(title,message);
          break;
      default:
          this._notify.success('Test','Default');
          break;
    }
  }

}
