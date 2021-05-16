import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from './components/genre/genre.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieToSeeComponent } from './components/movie-to-see/movie-to-see.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'genre', component: GenreComponent },
  {path: 'movielist', component: MovieListComponent},
  {path: 'movietosee', component: MovieToSeeComponent},
  {path: 'moviehome', component: MovieHomeComponent},
  {path: '', component: MovieHomeComponent}, 
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
