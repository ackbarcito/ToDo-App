import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../share/services/toDo.service';
import { ToDo } from '../toDo.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateComponent } from '../modal-create/modal-create.component';
import { ToDoApiService } from '../share/services/toDoApi.service';
import { Observable } from 'rxjs';
import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'to-doApp';
  currentToDo!: ToDo;
  currentFolder!: string | null;
  //toDoList: ToDo[];
  apiTodos!: ToDo[];
  apiFavourites!: ToDo[];
  constructor(
    //private todoService: ToDoService,
    public dialog: MatDialog,
    private todoApiService: ToDoApiService,
    private _ac: ActivatedRoute
  ) {
    //this.toDoList = todoService.getToDos();
    this.currentFolder = this._ac.snapshot.paramMap.get('folder');
    this.todoApiService.getTodos().subscribe((data) => {
      this.apiTodos = data;
      if (this.currentFolder != null) {
        const filt = this.currentFolder;
        this.apiTodos = this.apiTodos.filter((todo) => todo.folder == filt);
      }
    });
    /* this.todoApiService
      .getFavourites()
      .subscribe((data) => (this.apiFavourites = data));
    console.log(this._ac.snapshot.paramMap.get('folder')); */
  }
  ngOnInit(): void {}

  deleteApiTodo(id: number) {
    this.todoApiService.deleteTodo(id).subscribe();
    this.apiTodos = this.apiTodos.filter((item) => item.id != id);
  }

  updateTodo(mytodo: ToDo): void {
    this.todoApiService.updateToDo(mytodo).subscribe((todo) => {
      const indexToUpdate = todo
        ? this.apiTodos.findIndex((c) => c.id == todo.id)
        : -1;
      if (indexToUpdate > -1) {
        this.apiTodos[indexToUpdate] = todo;
      }
    });
  }

  saveNewTodo(mytodo: ToDo) {
    this.todoApiService
      .addNewTodo(mytodo)
      .subscribe((todo) => this.apiTodos.push(todo));
  }

  /* deleteToDo(id: number) {
    this.todoApiService.deleteTodo(id);
  } */
  selectCurrentTodo(item: ToDo) {
    this.resetCurrentTodo();
    this.currentToDo = item;
  }

  /* updateChanges(newT: ToDo) {
    this.todoApiService.updateToDo(newT);
  } */

  increaseProgress(todo: ToDo) {
    this.todoApiService.increaseProgress(todo).subscribe();
  }
  decreaseProgress(todo: ToDo) {
    this.todoApiService.deacreaseProgress(todo).subscribe();
  }

  changeFavourite(todo: ToDo) {
    this.todoApiService.changeFavourite(todo).subscribe();
  }

  resetCurrentTodo() {
    const empty: ToDo = {
      id: null,
      title: '',
      details: '',
      folder: '',
      progress: 0,
      favourite: false,
    };

    this.currentToDo = empty;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateComponent, {
      height: '480px',
      width: '360px',
      data: { todo: this.currentToDo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.saveNewTodo(result);
      }
    });
  }
}
