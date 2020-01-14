import { NgModule } from '@angular/core';

// ANGULAR DEPENDENCIES
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

// REDUCERS
import * as fromAuth from './auth/auth.reducer';

// SERVICES
import { AuthService } from './auth/auth.service';

// ENVIRONMENT
import { environment } from '../environments/environment';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot({ auth: fromAuth.reducer }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
