import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todoName
  todos: string[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(){
    if(!this.todoName) {
      window.alert('Tarefa em branco')
      return
    }

    this.todoService.addTodo(this.todoName)
    this.getTodos()
    this.todoName = ''
  }

  getTodos(){
    this.todos = this.todoService.getTodos()
  }

  deleteTodo(item){
    this.todos.splice(this.todos.indexOf(item), 1)
    console.log(item)

  }
}
