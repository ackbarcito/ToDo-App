import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
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
