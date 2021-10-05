import { Injectable } from '@angular/core';
import { TODOS } from 'src/app/mock-toDo';
import { ToDo } from 'src/app/toDo.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  getToDos() {
    return TODOS;
  }

  getFavourites() {
    return TODOS.filter((item) => item.favourite == true);
  }

  deleteToDo(id: number) {
    let index = TODOS.findIndex((item) => item.id == id);
    TODOS.splice(index, 1);
  }

  increaseProgress(id: number) {
    let index = TODOS.findIndex((item) => item.id == id);
    if (TODOS[index].progress + 5 > 100) {
      TODOS[index].progress = 100;
    } else TODOS[index].progress += 5;
  }

  decreaseProgress(id: number) {
    let index = TODOS.findIndex((item) => item.id == id);
    if (TODOS[index].progress - 5 < 0) {
      TODOS[index].progress = 0;
    } else TODOS[index].progress -= 5;
  }

  saveChanges(newT: ToDo) {
    if (newT.id || newT.id === 0) {
      let editId = TODOS.findIndex((item) => item.id == newT.id);
      TODOS.splice(editId, 1, newT);
    } else {
      if (TODOS.length != 0 || newT.id === null) {
        let lastTodo = TODOS[TODOS.length - 1];
        newT.id = lastTodo.id + 1;
        if (newT.progress === undefined) {
          newT.progress = 0;
        }
        TODOS.push(newT);
      } else {
        newT.id = 0;
        TODOS.push(newT);
      }
    }
  }
}
