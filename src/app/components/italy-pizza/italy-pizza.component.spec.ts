import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalyPizzaComponent } from './italy-pizza.component';

describe('ItalyPizzaComponent', () => {
  let component: ItalyPizzaComponent;
  let fixture: ComponentFixture<ItalyPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalyPizzaComponent]
    });
    fixture = TestBed.createComponent(ItalyPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
