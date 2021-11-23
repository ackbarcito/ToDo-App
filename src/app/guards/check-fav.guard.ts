import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToDoService } from '../share/services/toDo.service';
import { ToDoApiService } from '../share/services/toDoApi.service';
import { ToDo } from '../toDo.model';

@Injectable({
  providedIn: 'root',
})
export class CheckFavGuard implements CanActivate, OnInit {
  todos!: ToDo[];
  constructor(private todoService: ToDoApiService, private _rooter: Router) {}
  ngOnInit(): void {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Observable<boolean>((obs) => {
      this.todoService.getFavourites().subscribe((data) => {
        if (data.length === 0) {
          obs.next(false);
          alert('No se encontraron todo favoritos');
        } else {
          obs.next(true);
        }
      });
    });
  }
}
