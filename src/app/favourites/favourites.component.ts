import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../share/services/toDo.service';
import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  toDoFavourites: ToDo[];
  constructor(private todoService: ToDoService) {
    this.toDoFavourites = todoService.getFavourites();
  }
  ngOnInit(): void {}
}
