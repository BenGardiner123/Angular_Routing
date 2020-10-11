import { DogComponent } from './routes/dog/dog.component';
import { CatComponent } from './routes/cat/cat.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "cats", component: CatComponent},
  {path: "dogs", component: DogComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
