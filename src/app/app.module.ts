import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

// Service
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import { SinfotoPipe } from './pipes/sinfoto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
