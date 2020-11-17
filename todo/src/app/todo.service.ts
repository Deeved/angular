import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [] 

  constructor() { }

  getTodos(){
    return this.todos
  }

  addTodo(todo){
    this.todos.push(todo)
  }
}
