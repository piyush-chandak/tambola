import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditParticipantComponent } from './add-or-edit-participant.component';

describe('AddOrEditParticipantComponent', () => {
  let component: AddOrEditParticipantComponent;
  let fixture: ComponentFixture<AddOrEditParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
