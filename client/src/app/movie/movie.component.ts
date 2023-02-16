import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private router:Router, private movie:MoviesService){}
  movies:any

  ngOnInit(): void {
      if(localStorage.getItem("isLogin") == null){
        this.router.navigate(["login"])
      }

      this.movie.movies(1).pipe().subscribe((data)=>{
        this.movies = data
        console.log(data);
      })
  }
}
