import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    side = 'start';
 options={
    position:["bottom","right"],
    timeOut:5000,
    pauseOnHover:true,
    animate:"scale"
  };
}
