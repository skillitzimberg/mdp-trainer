import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { login, logout } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    login({
      email: form.value.email,
      password: form.value.password
    })
  }

  logout() {
    logout();
  }
}
