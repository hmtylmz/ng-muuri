import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMuuriComponent } from './ng-muuri.component';

describe('NgMuuriComponent', () => {
  let component: NgMuuriComponent;
  let fixture: ComponentFixture<NgMuuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMuuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMuuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
