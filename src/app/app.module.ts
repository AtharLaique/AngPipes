import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
//import here
import {CutomePipe} from  './custome.pipe';

//To enable putt here
@NgModule({
  declarations: [
    AppComponent,
    CutomePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
