import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuruculumComponent } from './curuculum.component';

describe('CuruculumComponent', () => {
  let component: CuruculumComponent;
  let fixture: ComponentFixture<CuruculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuruculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuruculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
