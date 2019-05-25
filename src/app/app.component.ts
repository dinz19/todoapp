import { Component } from '@angular/core';
import { TodoserviceService } from './todoservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']    
})
export class AppComponent {
  title = 'todo-app'; 
  todoArray=[];
  todo;
  addFlag : boolean = false;
  constructor(private todoService : TodoserviceService, private route : Router) { }

  //todoForm: new FormGroup()
addTodo(value){
  this.todoArray = this.todoService.addTodo(value);
    if(this.todoArray.length == 0){
      alert('Field required **')
  }else{
      console.log('Tasks has been added')
  }
    
  }
/*delete item*/
/*
  deleteItem(todo){
    alert("dele called")
    console.log(this.todoService.deleteItem(todo));
  }
*/
  
deleteDoneItems(todo){
  alert("dele called")
  console.log(this.todoService.deleteDoneItems(todo));
}

// submit Form
  todoSubmit(todoForm){
     if(todoForm.value!==""){
      this.todoArray = this.todoService.addTodo(todoForm.value);
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }

  } 
}
