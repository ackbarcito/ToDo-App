import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavouritesComponent } from 'src/app/favourites/favourites.component';
import { CheckFavGuard } from 'src/app/guards/check-fav.guard';
import { TodoResolver } from '../resolvers/todo.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavouritesComponent,
        resolve: {
          fav: TodoResolver,
        },
        canActivate: [CheckFavGuard],
      },
    ]),
  ],
})
export class FavouritesModule {}
