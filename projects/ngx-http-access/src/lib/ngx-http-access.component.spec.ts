import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHttpAccessComponent } from './ngx-http-access.component';

describe('NgxHttpAccessComponent', () => {
  let component: NgxHttpAccessComponent;
  let fixture: ComponentFixture<NgxHttpAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHttpAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHttpAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
