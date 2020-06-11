import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreCondidatComponent } from './offre-condidat.component';

describe('OffreCondidatComponent', () => {
  let component: OffreCondidatComponent;
  let fixture: ComponentFixture<OffreCondidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreCondidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
