import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCondidatComponent } from './detail-condidat.component';

describe('DetailCondidatComponent', () => {
  let component: DetailCondidatComponent;
  let fixture: ComponentFixture<DetailCondidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCondidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
