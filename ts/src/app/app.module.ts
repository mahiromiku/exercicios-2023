import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

import {TrabalhoComponent} from '../app/pages/trabalho/trabalho.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: TrabalhoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TrabalhoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
