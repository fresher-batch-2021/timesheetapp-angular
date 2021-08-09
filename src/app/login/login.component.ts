import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email:string="";
  password:string="";

  login(){
    alert("Login button clicked");
    alert("Email"+this.email);
    alert("Password"+this.password);
    if (this.email==""){
      alert("Email  cannot be blank");
    } else {
      alert("Successfully Registered");
    }
  }

}
