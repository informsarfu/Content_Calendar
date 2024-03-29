import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DialogModule } from 'primeng/dialog';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


const firebaseConfig = {
  apiKey: "AIzaSyCkGKwnsdwliHWlZd1vnsOBY4xiyhkEB9s",
  authDomain: "calendar-666ce.firebaseapp.com",
  projectId: "calendar-666ce",
  storageBucket: "calendar-666ce.appspot.com",
  messagingSenderId: "709368609944",
  appId: "1:709368609944:web:47842df911580b947824ed",
  measurementId: "G-6LX3NVBXYY"
};

@NgModule({
  declarations: [
    AppComponent,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    FullCalendarModule,
    DialogModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    [TimepickerModule.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
