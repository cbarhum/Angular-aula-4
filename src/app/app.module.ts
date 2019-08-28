import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importando o Angular Forms
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


//forma antiga de exportar
// import { FormComponent } from './form/form.component';

//forma nova
import { FormComponent } from './components/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,// modulo do angular forms
    ReactiveFormsModule, BrowserAnimationsModule// modulo do angular forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
