import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambolaComponent } from './tambola.component';

describe('TambolaComponent', () => {
  let component: TambolaComponent;
  let fixture: ComponentFixture<TambolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
