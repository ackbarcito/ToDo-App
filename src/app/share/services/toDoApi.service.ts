import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/toDo.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
const url = 'http://localhost:3000/todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoApiService {
  constructor(private _http: HttpClient) {}

  getTodos(): Observable<ToDo[]> {
    return this._http.get<ToDo[]>(url);
  }

  getFavourites(): Observable<ToDo[]> {
    const paramsFavourite = new HttpParams().set('favourite', true);
    return this._http.get<ToDo[]>(url, { params: paramsFavourite });
    /* .pipe(delay(1000)); */
  }

  getFolders() {
    return this._http.get<ToDo[]>(url);
  }

  deleteTodo(id: number) {
    const urlDelete = `${url}/${id}`;
    return this._http.delete(urlDelete);
  }

  updateToDo(todo: ToDo): Observable<ToDo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.put<ToDo>(
      'http://localhost:3000/todo/' + todo.id,
      todo,
      httpOptions
    );
  }
  addNewTodo(newTodo: ToDo): Observable<ToDo> {
    if (newTodo.folder == undefined) {
      newTodo.folder = '';
    } else {
      newTodo.folder =
        newTodo.folder[0].toUpperCase() +
        newTodo.folder.substr(1).toLowerCase();
    }
    if (newTodo.progress == undefined) {
      newTodo.progress = 0;
    }

    return this._http.post<ToDo>(url, newTodo);
  }
  increaseProgress(todo: ToDo) {
    if (todo.progress + 5 > 100) {
      todo.progress = 100;
    } else todo.progress += 5;
    return this.updateToDo(todo);
  }
  deacreaseProgress(todo: ToDo) {
    if (todo.progress - 5 < 0) {
      todo.progress = 0;
    } else todo.progress -= 5;
    return this.updateToDo(todo);
  }

  changeFavourite(todo: ToDo) {
    todo.favourite = !todo.favourite;
    console.log(todo.favourite);
    return this.updateToDo(todo);
  }
}
