import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ToDoApiService } from '../share/services/toDoApi.service';
import { ToDo } from '../toDo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<ToDo[]> {
  data!: ToDo[];
  constructor(private _todoService: ToDoApiService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ToDo[]> {
    return this._todoService.getFavourites().pipe(delay(2000));
  }
}
