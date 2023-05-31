import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutasComponent } from './aboutas.component';

describe('AboutasComponent', () => {
  let component: AboutasComponent;
  let fixture: ComponentFixture<AboutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutasComponent]
    });
    fixture = TestBed.createComponent(AboutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
