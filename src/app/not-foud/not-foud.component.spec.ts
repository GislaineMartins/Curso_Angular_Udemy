import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoudComponent } from './not-foud.component';

describe('NotFoudComponent', () => {
  let component: NotFoudComponent;
  let fixture: ComponentFixture<NotFoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
