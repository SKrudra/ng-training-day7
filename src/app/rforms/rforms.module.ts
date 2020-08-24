import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RRoutingModule } from './r-routing/r-routing.module';
import { RformsComponent } from './rforms/rforms.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RformsComponent],
  imports: [
    CommonModule,
    RRoutingModule,
    ReactiveFormsModule
  ]
})
export class RformsModule { }
