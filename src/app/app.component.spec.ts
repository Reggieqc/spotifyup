import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/shared/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './components/shared/side-navbar/side-navbar.component';
import { RouterTestingModule } from "@angular/router/testing"; 

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { angularFireAuthStub, angularFireDatabaseStub, authServiceStub } from './services/__stubs__';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        TopNavbarComponent,
        SideNavbarComponent
      ],
      providers: [
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFireDatabase, useValue: angularFireDatabaseStub },
        { provide: AuthService, useValue: authServiceStub },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});