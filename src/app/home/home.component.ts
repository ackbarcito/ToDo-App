import { Component } from '@angular/core';
import { ToDoService } from '../share/services/toDo.service';
import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'to-doApp';
  currentToDo!: ToDo;
  toDoList: ToDo[];
  constructor(private todoService: ToDoService) {
    this.toDoList = todoService.getToDos();
  }

  deleteToDo(id: number) {
    this.todoService.deleteToDo(id);
    this.resetCurrentTodo();
  }
  selectCurrentTodo(item: ToDo) {
    this.resetCurrentTodo();
    this.currentToDo = item;
  }
  saveChanges(newT: ToDo) {
    this.todoService.saveChanges(newT);
    this.resetCurrentTodo();
  }

  resetCurrentTodo() {
    const empty: ToDo = {
      id: null,
      title: '',
      details: '',
      folder: '',
      progress: 0,
      favourite: false,
    };

    this.currentToDo = empty;
  }
}
