import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDo } from '../toDo.model';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  @Input() todoList!: Array<ToDo>;
  @Output() delete = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();
  @Output() save = new EventEmitter<ToDo>();
  @Output() changeFavourite = new EventEmitter();

  faHeart = faHeart;

  constructor(public dialog: MatDialog) {}
  deletetodo(id: number) {
    this.delete.emit(id);
  }

  selectCourse(todo: ToDo) {
    this.openDialog(todo);
  }

  changeFav(todo: ToDo) {
    this.changeFavourite.emit(todo);
  }

  increaseProgressToDo(todo: ToDo) {
    this.increase.emit(todo);
  }
  decreaseProgressToDo(todo: ToDo) {
    this.decrease.emit(todo);
  }

  openDialog(todo: ToDo): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      height: '480px',
      width: '360px',
      data: { todo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.save.emit(result);
      }
    });
  }
}
