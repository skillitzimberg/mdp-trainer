// ANGULAR & DEPENDENCIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// COMPONENTS
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

// REDUCERS
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
