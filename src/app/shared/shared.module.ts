import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { FailAlertComponent } from './fail-alert/fail-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [FailAlertComponent, SuccessAlertComponent],
  imports: [CommonModule, FlexLayoutModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    FailAlertComponent,
    SuccessAlertComponent,
  ],
})
export class SharedModule {}
