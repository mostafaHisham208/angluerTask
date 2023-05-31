import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPComponent } from './product-p.component';

describe('ProductPComponent', () => {
  let component: ProductPComponent;
  let fixture: ComponentFixture<ProductPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPComponent]
    });
    fixture = TestBed.createComponent(ProductPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
