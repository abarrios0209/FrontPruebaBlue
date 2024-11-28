import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PersonajeServiceService } from './services/personaje-service.service';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {CdkDrag} from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    CdkDrag
  ],
  providers: [PersonajeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
