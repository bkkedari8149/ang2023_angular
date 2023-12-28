import { Component,Input } from '@angular/core';
import {DataService } from '../data.service';
@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {

  name: any; //normal prop
  @Input() surName:any; //input proprty

  constructor(private dataService: DataService) {
    console.log("constructor calling..");

  }

   //A component instance has a lifecycle that starts when Angular
  // instantiates the component class and renders the component view and its child views. 
  //ngOnchange() if component is having @input bound properties then ngOnChanges lc h get triiger first
  //ngOnInit()
  //ngDoCheck()
  //ngAfterContentInit()
  //ngOnDestroy()
  //ngAfterContentChecked()
  //ngAfterViewInit()
  //ngAfterViewChecked()
  ngOnChanges() {
    console.log("onchanges calling");
  }

  ngOnInit() {
    this.dataService.data.next("poonam...");
    console.log("Subj", this.dataService.data);

    this.name = this.dataService.userName;
    console.log("oninti calling");

  }
  ngDoCheck() {
    console.log("do chk calling");

  }

ngAfterContentInit() {
  console.log("ngafterContentInit ");

}
ngAftercontentChecked() {
  console.log("ngAfterContentChecked ");

}
ngAfterViewInit() {
  console.log("ngAfterViewInit ");

}
ngAfterViewChecked() {
  console.log("ngAfterviewChecked ");

}

ngOnDestroy() {
  console.log("ngOnDestroy ");
}
getData() {
  this.dataService.data.subscribe(data=>{
    console.log(data);

  })
}
}
