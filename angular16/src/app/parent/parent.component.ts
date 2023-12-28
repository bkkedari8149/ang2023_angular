import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
city = "Mumbai"
state:any;
sName!:string;
dataFormChild(event:any){
  console.log(event);
  this.state = event;
}
}
