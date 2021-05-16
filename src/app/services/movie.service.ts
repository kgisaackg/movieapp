import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  
  url: string = "http://www.omdbapi.com/?i=tt3896198&apikey=c4a06bc2&t=";

   //const moviesname[:MovieName] = [{name: "john wick"}, {name: "dave"}];

  constructor(private http: HttpClient) { }

  getMovies(movie: string){
    return this.http.get(`${this.url}${movie}`);
  }
}
