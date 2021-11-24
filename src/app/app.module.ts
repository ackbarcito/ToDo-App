import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalCreateComponent } from './modal-create/modal-create.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './router/routing.module';
import { RouterModule } from '@angular/router';
import { FavouritesModule } from './router/favourites.module';
import { FoldersComponent } from './folders/folders.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoDetailsComponent,
    HomeComponent,
    FavouritesComponent,
    PageNotFoundComponent,
    ModalCreateComponent,
    ModalEditComponent,
    FoldersComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    RoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalEditComponent],
})
export class AppModule {}
