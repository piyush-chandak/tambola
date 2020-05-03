import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryManagmentComponent } from './history-managment.component';

describe('HistoryManagmentComponent', () => {
  let component: HistoryManagmentComponent;
  let fixture: ComponentFixture<HistoryManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
