export class ToDo {
  id!: any;
  title!: string;
  details!: string;
  folder!: string;
  favourite: boolean = false;
  progress: number = 0;
  constructor(
    id: any,
    title: string,
    details: string,
    folder: string,
    favourite: boolean,
    progress: number
  ) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.folder = folder;
    this.favourite = favourite;
    this.progress = progress;
  }
}
