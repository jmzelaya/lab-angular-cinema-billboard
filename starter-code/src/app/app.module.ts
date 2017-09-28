import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { CinemaService } from './services/cinema.service'

import { AppComponent } from './app.component';
import { MyhomeComponent } from './pages/myhome/myhome.component';
import { MymovieComponent } from './pages/mymovie/mymovie.component';

const myRoutes: Routes = [
    { path: 'home', component: MyhomeComponent},
    { path: 'movie/:id', component: MymovieComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    MymovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [
    CinemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
