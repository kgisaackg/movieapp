import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { SearchMovieService } from 'src/app/services/search-movie.service';

@Component({
  selector: 'app-movie-to-see',
  templateUrl: './movie-to-see.component.html',
  styleUrls: ['./movie-to-see.component.scss']
})
export class MovieToSeeComponent implements OnInit {

  theMovie: any;
  show = false;

  movies = [{
      Title:"Guardians of the Galaxy Vol. 2",
      Year:"2017",
      Rated:"PG-13",
      Released:"05 May 2017",
      Runtime:"136 min",
      Genre:"Action, Adventure, Comedy, Sci-Fi",
      Actors:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
      Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego."
    },
    {
      Title:"Guardians of the Galaxy Vol. 2",
      Year:"2017",
      Rated:"PG-13",
      Released:"05 May 2017",
      Runtime:"136 min",
      Genre:"Action, Adventure, Comedy, Sci-Fi",
      Actors:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
      Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego."
    }
  ]

  results: any[] = [];

  constructor(private fb: FormBuilder, private searchMovieService: SearchMovieService,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.searchForm.valueChanges
    .pipe(debounceTime(200), distinctUntilChanged())
    .subscribe(result => 
      this.searchMovieService.searchMovies(this.searchForm.value.title)
      .subscribe((response: any) => {
        this.results = response.Search;
        console.log(this.results)
      }));
  }
  
  searchForm = this.fb.group({
    title: [''],
  })

  movieInfo = "Information of: "
  onSubmit(){
    this.movieInfo += this.searchForm.value.title;
  }

  movieName(movie: string){
    this.movieService.getMovies(movie)
      .subscribe((data: any) => {
         console.log(data);
         this.theMovie = data;
         this.movies.push(data);
         this.show = true;

         //to close list
         this.results.length = 0; 
    })
  }
  
  add(movie: any){
    this.movies.push(movie);
  }

  delete(movie: string){
    //create a new array of objects
  }

}
