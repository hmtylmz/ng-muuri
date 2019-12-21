import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMuuriItemComponent } from './ng-muuri-item.component';

describe('NgMuuriItemComponent', () => {
  let component: NgMuuriItemComponent;
  let fixture: ComponentFixture<NgMuuriItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMuuriItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMuuriItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
