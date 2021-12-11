import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  success_msg = true;
  success_flag = false;

  customColor = "red";
  txtColor = "green";

  contacts = [
    {
      "firstName": "Sambit",
      "lastName":"Sahu",
      "contactId":1234
    },
    {
      "firstName": "John",
      "lastName":"Doe",
      "contactId":2345
    },
    {
      "firstName": "Michael",
      "lastName":"Bob",
      "contactId":5678
    }
  ];
  superPower = "superMan12";


} 
