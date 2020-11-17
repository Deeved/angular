import { Component, OnChanges, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
import { Todo } from '../todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {
  
  todoName
  todos: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  ngOnChanges(){

  }

  addTodo(){
    if(!this.todoName) {
      window.alert('Tarefa em branco')
      return
    }

    this.todoService.addTodo(this.todoName)
    this.todoName = ''
    
    this.updateTodosView()
  }

  deleteTodo(id){
    this.todoService.deleteTodo(id)
    this.updateTodosView()
  }

  getTodos(){
    this.todoService.getTodos()
    .subscribe(todos=>this.todos = todos)
  }
  
  updateTodosView(){
    setTimeout(()=>{this.getTodos()}, 500)
  }
}
