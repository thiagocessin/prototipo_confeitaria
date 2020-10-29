import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { RoutingModule } from './routing/routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';

import {MatMenuModule} from '@angular/material/menu';

import {MatButtonModule} from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';

import {MatIconModule} from '@angular/material/icon';
import { ConteudoHomeComponent } from './conteudo-home/conteudo-home.component';

import {MatCardModule} from '@angular/material/card';

import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConteudoHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ChartsModule
    
  ],
  exports:[
    MatSidenavModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
