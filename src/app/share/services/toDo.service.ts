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

  saveChanges(newT: ToDo) {
    if (newT.id || newT.id === 0) {
      TODOS.splice(newT.id, 1, newT);
    } else {
      if (TODOS.length != 0 || newT.id === null) {
        let lastTodo = TODOS[TODOS.length - 1];
        newT.id = lastTodo.id + 1;
        TODOS.push(newT);
      } else {
        newT.id = 0;
        TODOS.push(newT);
      }
    }
  }
}
