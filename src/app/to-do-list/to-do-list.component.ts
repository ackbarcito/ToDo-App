import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  @Input() todoList!: Array<ToDo>;
  @Output() delete = new EventEmitter();
  @Output() select = new EventEmitter();

  deletetodo(id: number) {
    this.delete.emit(id);
  }

  selectCourse(todo: ToDo) {
    this.select.emit(todo);
  }
}