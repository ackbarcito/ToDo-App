import { Component, OnInit } from '@angular/core';
import { ToDoApiService } from '../share/services/toDoApi.service';
import { ToDo } from '../toDo.model';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { folder } from '../folder.model';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
})
export class FoldersComponent implements OnInit {
  todos!: ToDo[];
  folders: string[] = [];
  constructor(private _todoService: ToDoApiService, private route: Router) {
    this._todoService
      .getFolders()
      .pipe(
        switchMap((values) => from(values)),
        map((value) => {
          this.folders.indexOf(value.folder) === -1
            ? this.folders.push(value.folder)
            : console.log(value + ' esta repetido');
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}

  onSelect(folder: string) {
    this.route.navigate(['/home/folders/', folder]);
  }
}
