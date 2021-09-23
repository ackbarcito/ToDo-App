import { Component, NgModule, OnInit } from '@angular/core';
import { ToDo } from './toDo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'to-doApp';
  currentToDo!: ToDo;
  toDoList: ToDo[] = [
    new ToDo(0, 'Aprender Html', 'Debo aprender html', 'Developer', true, 80),
    new ToDo(1, 'Aprender Css', 'Debo aprender Css', 'Web', false, 30),
    new ToDo(
      2,
      'Aprender Typescript',
      'Debo aprender Typescript',
      'Web',
      true,
      60
    ),
  ];

  ngOnInit(): void {
    this.resetCurrentTodo();
  }

  deleteToDo(id: number) {
    let index = this.toDoList.findIndex((item) => item.id == id);
    this.toDoList.splice(index, 1);
    this.resetCurrentTodo();
  }
  selectCurrentTodo(item: ToDo) {
    this.currentToDo = item;
    console.log(item.id);
  }
  saveChanges(newT: ToDo) {
    if (newT.id || newT.id === 0) {
      this.toDoList.splice(newT.id, 1, newT);
    } else {
      if (this.toDoList.length != 0) {
        let lastTodo = this.toDoList[this.toDoList.length - 1];
        newT.id = lastTodo.id + 1;
        this.toDoList.push(newT);
      } else {
        newT.id = 0;
        this.toDoList.push(newT);
      }
    }
    this.resetCurrentTodo();
  }

  resetCurrentTodo() {
    const emptyToDo: ToDo = {
      id: null,
      title: '',
      details: '',
      folder: '',
      progress: 0,
      favourite: false,
    };
    this.currentToDo = emptyToDo;
  }
}
