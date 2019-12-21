import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMuuriGridComponent } from './ng-muuri-grid.component';

describe('NgMuuriGridComponent', () => {
  let component: NgMuuriGridComponent;
  let fixture: ComponentFixture<NgMuuriGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMuuriGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMuuriGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
