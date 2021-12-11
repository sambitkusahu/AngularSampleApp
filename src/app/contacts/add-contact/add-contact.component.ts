import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

ngOnChanges(): void{
  console.log("On change method called....")
}

ngOnDestroy(){

}
ngAfterViewInit(){
  
}
}
