import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercComponent } from './ecommerc.component';

describe('EcommercComponent', () => {
  let component: EcommercComponent;
  let fixture: ComponentFixture<EcommercComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
