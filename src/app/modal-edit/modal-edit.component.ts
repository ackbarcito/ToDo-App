import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDo } from '../toDo.model';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent implements OnInit {
  currentTodo!: ToDo;
  form!: FormGroup;
  id!: number;
  title: string;
  details: string;
  folder: string;
  favourite: boolean;
  progress: number;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { todo: ToDo }
  ) {
    this.id = data.todo.id;
    this.title = data.todo.title;
    this.details = data.todo.details;
    this.folder = data.todo.folder;
    this.favourite = data.todo.favourite;
    this.progress = data.todo.progress;
  }
  ngOnInit() {
    this.currentTodo = this.data.todo;

    this.form = this.fb.group({
      id: [this.id],
      title: [this.title, Validators.required],
      details: [this.details, Validators.required],
      folder: [this.folder],
      progress: [this.progress],
      favourite: [this.favourite],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
