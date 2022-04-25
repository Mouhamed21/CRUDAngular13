import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AfficherElevesComponent } from './afficherEleves/afficherEleves.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasseComponent } from './classe/classe.component';

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    AfficherElevesComponent,
    ClasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
