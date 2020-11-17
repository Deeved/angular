import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todoName: string
  todo: string[] = []

  constructor() { }

  ngOnInit(): void {
  }


  addTodo(){
    if(!this.todoName) {
      window.alert('Tarefa em branco')
      return
    }

    this.todo.push(this.todoName)
    console.log(this.todo)
    
  }
}
