import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from './todo' 

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [] 
  url = 'http://localhost:3000/todos'
  
  constructor(private http: HttpClient) { }

  addTodo(todo){
    this.http.post(this.url, {todo:todo}).subscribe()
  }

  getTodos(){
    return this.http.get<Todo[]>(this.url)
  }

  deleteTodo(id){
    this.http.delete(`${this.url}/${id}`).subscribe()
  }
}
