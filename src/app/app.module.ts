import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule,MatButtonModule, MatIconModule, MatCardModule, MatBadgeModule,MatExpansionModule,MatRadioModule } from '@angular/material';

import { HttpClientModule } from '../../node_modules/@angular/common/http';

import { TableComponent } from './table/table.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import  {MatCheckboxModule, MatTabsModule,  MatGridListModule,
MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatMenuModule,
MatDividerModule, MatSlideToggleModule, MatListModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,

    MatCheckboxModule, MatTabsModule,  MatGridListModule,
MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatMenuModule,
MatDividerModule, MatSlideToggleModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
