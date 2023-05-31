import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdDetialsComponent } from './prd-detials.component';

describe('PrdDetialsComponent', () => {
  let component: PrdDetialsComponent;
  let fixture: ComponentFixture<PrdDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrdDetialsComponent]
    });
    fixture = TestBed.createComponent(PrdDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
