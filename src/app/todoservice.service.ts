import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor() { }

  
  todoArray=[];
  todo;
  compTasksArray = [];
  //todoForm: new FormGroup()
addTodo = function (value){
 
  if(value !== ""){
     this.todoArray.push(value)
     return this.todoArray;
  }
    
  }
/*delete item
  deleteItem= function (todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
      return this.todoArray.splice(i,1)
    }
   }
  }*/

  /*delete Done item*/
  deleteDoneItems= function (todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.compTasksArray[i]){
      return this.compTasksArray.splice(i,1)
    }
   }
  }

  getCompletedTasks = function(value){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(value== this.todoArray[i]){
       
       this.compTasksArray.push(value);
       //this.todoArray.splice(i,1);
       console.log(this.compTasksArray);
       return this.compTasksArray;
      }
     }

  }

  todoSubmit(todoForm){
     if(todoForm.value!==""){
    this.todoArray.push(todoForm.value.todo)
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    console.log(todoForm)
    //todoForm.reset();
  } 
}
