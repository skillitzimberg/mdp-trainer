import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    AngularFireAuthModule,
    AuthRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthModule { }
