import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent} from './components/home/home.component'
import { SearchComponent } from './components/search/search.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { CreateComponent } from './components/create/create.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
// import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'search', component: SearchComponent, canActivate:[AuthGuardService]},
    { path: 'create', component: CreateComponent, canActivate:[AuthGuardService]},
    { path: 'artist/:id', component: ArtistInfoComponent, canActivate:[AuthGuardService]},
    { path: 'new-releases', component: NewReleasesComponent, canActivate:[AuthGuardService]},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]