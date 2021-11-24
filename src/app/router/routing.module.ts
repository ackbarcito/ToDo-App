import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { FoldersComponent } from '../folders/folders.component';
import { TodoResolver } from '../resolvers/todo.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {
        path: 'home/folders/:folder',
        component: HomeComponent,
      },
      { path: 'folders', component: FoldersComponent },
      {
        path: 'favourites',
        loadChildren: () =>
          import('./favourites.module').then((m) => m.FavouritesModule),
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
})
export class RoutingModule {}
