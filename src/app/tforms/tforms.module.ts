import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRoutingModule } from './t-routing/t-routing.module';
import { TformsComponent } from './tforms/tforms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TformsComponent],
  imports: [
    CommonModule,
    TRoutingModule,
    FormsModule,
  ]
})
export class TformsModule { }
