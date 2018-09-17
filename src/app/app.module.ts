import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { MyMaterialModule } from './my-material/my-material.module';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { MoedaPipe } from './_pipe/moeda.pipe';

import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    MoedaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MyMaterialModule,
    routing,
    ChartModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
