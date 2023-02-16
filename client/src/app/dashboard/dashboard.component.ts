import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
isLoggedIn='false' || null
buttonText = ""
constructor(private router:Router){}
  ngOnInit(): void {
      this.isLoggedIn = localStorage.getItem("isLoggin") !== null ? "true":"false"
      if (this.isLoggedIn) {
        this.buttonText = "Log Out "
      }else {
        this.buttonText = "Log in "

      }
  }

  login(){
    if(this.isLoggedIn){
      localStorage.removeItem("isLogin")
    }else {
      this.router.navigate(['Login'])
    }
  }
}
