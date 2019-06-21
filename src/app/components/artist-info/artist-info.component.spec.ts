import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistInfoComponent } from './artist-info.component';
import { NoimagePipe } from '../../pipes/noimage.pipe';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import { angularFireAuthStub } from 'src/app/services/__stubs__';

describe('ArtistInfoComponent', () => {
  let component: ArtistInfoComponent;
  let fixture: ComponentFixture<ArtistInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ArtistInfoComponent, NoimagePipe ],
      providers: [
        {provide: ActivatedRoute, useValue: { params: of({id:123})}},
        {provide: AngularFireAuth, useValue: angularFireAuthStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
