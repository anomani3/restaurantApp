import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { ListRestroComponent } from './list-restro/list-restro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';

import {HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    UpdateRestroComponent,
    ListRestroComponent,
    LoginComponent,
    RegisterComponent,
    DeleteComponent,
    AdvertisementFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
