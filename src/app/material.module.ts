import { NgModule } from '@angular/core';
import {
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatFormFieldModule
  ],
  exports: [
    MatFormFieldModule
  ]
})
export class MaterialModule{}