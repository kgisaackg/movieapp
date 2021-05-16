import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  myTopMovies: string[] = ['John Wick', 'American Gangster', 'Wolf of wall street',
  "the little things", 'Project Power',
  'John Wick', 'American Gangster', 'Wolf of wall street',
  "the little things", 'Project Power'];
  movies: any = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.myTopMovies.forEach((topMovie) => {
      this.movieService.getMovies(topMovie)
      .subscribe((data) => {
         console.log(data);
         this.movies.push(data);
      })
    });
  }

}
