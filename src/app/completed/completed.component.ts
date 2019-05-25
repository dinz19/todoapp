import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  activeId : string
  compArray : any = []
  constructor(private todoservice : TodoserviceService, private activeRoute : ActivatedRoute) { }

  ngOnInit() { 

    
    this.activeRoute.params.subscribe(
      (routeParams) => { 
        console.log(this.activeRoute.params);
      this.activeId  = routeParams.id;
      
      this.compArray = this.todoservice.getCompletedTasks(this.activeId);
      console.log(this.compArray);  
    }
    );
    
  }

  /*delete item*/
  deleteItem(todo){
    for(let i=0 ;i<= this.compArray.length ;i++){
      if(todo== this.compArray[i]){
        this.compArray.splice(i,1);
      }
     }
    }
  }

