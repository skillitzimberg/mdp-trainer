import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email, 
      password: form.value.password
    });
  }

}
