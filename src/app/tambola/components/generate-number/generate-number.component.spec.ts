import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNumberComponent } from './generate-number.component';

describe('GenerateNumberComponent', () => {
  let component: GenerateNumberComponent;
  let fixture: ComponentFixture<GenerateNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
