import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent  {
title = "Return Calculator";
   result !: number ;

 
Returns(val : string){
  
this.result = parseFloat(val) * 2.11;


}

 

}
