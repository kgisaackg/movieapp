import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  url: string = "http://www.omdbapi.com/?i=tt3896198&apikey=c4a06bc2&s=";

 constructor(private http: HttpClient) { }

 searchMovies(movie: string){
   return this.http.get(`${this.url}${movie}&type=movie`);
 }
}
