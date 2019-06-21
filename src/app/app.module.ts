import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/shared/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './components/shared/top-navbar/top-navbar.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routes';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SearchComponent } from './components/search/search.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { CreateComponent } from './components/create/create.component';
import { CardsComponent } from './components/shared/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    TopNavbarComponent,
    ArtistInfoComponent,
    ProfileComponent,
    ReactiveFormComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    NewReleasesComponent,
    NoimagePipe,
    [SummaryPipe],
    CreateComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    SpotifyService,
    [SummaryPipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
