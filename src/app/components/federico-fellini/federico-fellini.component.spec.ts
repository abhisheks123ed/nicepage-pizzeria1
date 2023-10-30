import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedericoFelliniComponent } from './federico-fellini.component';

describe('FedericoFelliniComponent', () => {
  let component: FedericoFelliniComponent;
  let fixture: ComponentFixture<FedericoFelliniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FedericoFelliniComponent]
    });
    fixture = TestBed.createComponent(FedericoFelliniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
