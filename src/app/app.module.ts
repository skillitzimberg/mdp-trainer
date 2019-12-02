// ANGULAR & DEPENDENCIES
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

// REDUCERS
import { SharedModule } from './shared/shared.module';

// OTHER
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
