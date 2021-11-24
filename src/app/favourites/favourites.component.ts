import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  toDoFavourites!: ToDo[];
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.toDoFavourites = this.route.snapshot.data.fav;
  }
}
