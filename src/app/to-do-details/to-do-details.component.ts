import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css'],
})
export class ToDoDetailsComponent {
  currentTodo!: ToDo;
  @Input()
  set selecteTodo(selecteTodo: ToDo) {
    this.currentTodo = Object.assign({}, selecteTodo);
  }
  @Output() save = new EventEmitter<ToDo>();
  @Output() reset = new EventEmitter();

  saveTodo(current: ToDo, form: NgForm) {
    this.save.emit(current);

    setTimeout(() => {
      form.resetForm();
    });
  }

  resetForm() {
    this.reset.emit();
  }
}
