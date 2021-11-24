import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../share/services/toDo.service';
import { ToDo } from '../toDo.model';
import { ToDoApiService } from '../share/services/toDoApi.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  toDoFavourites!: ToDo[];
  constructor(private todoService: ToDoApiService) {
    this.todoService
      .getFavourites()
      .subscribe((favs) => (this.toDoFavourites = favs));
  }
  ngOnInit(): void {}
}
