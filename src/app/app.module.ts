import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { ProfileComponent } from './profile/profile.component';

import { ProfileService } from './services/profile.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfilesComponent,
    NotFoundComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
