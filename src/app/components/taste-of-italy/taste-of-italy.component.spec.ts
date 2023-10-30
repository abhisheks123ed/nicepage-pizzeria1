import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasteOfItalyComponent } from './taste-of-italy.component';

describe('TasteOfItalyComponent', () => {
  let component: TasteOfItalyComponent;
  let fixture: ComponentFixture<TasteOfItalyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasteOfItalyComponent]
    });
    fixture = TestBed.createComponent(TasteOfItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
