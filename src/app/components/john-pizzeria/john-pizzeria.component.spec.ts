import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnPizzeriaComponent } from './john-pizzeria.component';

describe('JohnPizzeriaComponent', () => {
  let component: JohnPizzeriaComponent;
  let fixture: ComponentFixture<JohnPizzeriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JohnPizzeriaComponent]
    });
    fixture = TestBed.createComponent(JohnPizzeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
