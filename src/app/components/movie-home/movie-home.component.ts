import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    console.log('Movie To Search');
  }
}
