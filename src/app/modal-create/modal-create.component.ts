import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css'],
})
export class ModalCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDo
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveTodo(current: ToDo, form: NgForm) {
    /* this.save.emit(current);

    setTimeout(() => {
      form.resetForm();
    }); */
  }
}
