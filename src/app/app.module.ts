import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UnicornDetailComponent } from './unicorn-detail/unicorn-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UnicornDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

