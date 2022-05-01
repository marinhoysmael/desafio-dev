import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ]
})
export class MeterialModule { }
