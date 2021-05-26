import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import UserService from './UserService';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { EllipsisPipe } from './ellipsis.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],  
  bootstrap: [AppComponent]
})
export class AppModule { }