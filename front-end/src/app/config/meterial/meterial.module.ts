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
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
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
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ScrollingModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ]
})
export class MeterialModule { }
