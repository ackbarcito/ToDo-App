import { Component } from '@angular/core';
import { ToDoService } from '../share/services/toDo.service';
import { ToDo } from '../toDo.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateComponent } from '../modal-create/modal-create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'to-doApp';
  currentToDo!: ToDo;
  toDoList: ToDo[];
  constructor(private todoService: ToDoService, public dialog: MatDialog) {
    this.toDoList = todoService.getToDos();
  }
  
  deleteToDo(id: number) {
    this.todoService.deleteToDo(id);
    
  }
  selectCurrentTodo(item: ToDo) {
    this.resetCurrentTodo();
    this.currentToDo = item;
  }
  saveChanges(newT: ToDo) {
    this.todoService.saveChanges(newT);
    this.resetCurrentTodo();
  }

  increaseProgress(id: number) {
    this.todoService.increaseProgress(id);
  }
  decreaseProgress(id: number) {
    this.todoService.decreaseProgress(id);
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
        this.saveChanges(result);
      }
    });
  }
}
