import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FailAlertComponent } from './fail-alert/fail-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    FailAlertComponent, 
    SuccessAlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FailAlertComponent, 
    SuccessAlertComponent
  ]
})
export class SharedModule {}