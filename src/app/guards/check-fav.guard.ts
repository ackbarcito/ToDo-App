import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToDoService } from '../share/services/toDo.service';

@Injectable({
  providedIn: 'root',
})
export class CheckFavGuard implements CanActivate {
  constructor(private todoService: ToDoService, private _rooter: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.todoService.getFavourites().length === 0) {
      alert('No se encontraron todo favoritos');
      //this._rooter.navigate(['/']);
      return false;
    }
    return true;
  }
}
