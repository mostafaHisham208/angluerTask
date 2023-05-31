import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRComponent } from './group-r.component';

describe('GroupRComponent', () => {
  let component: GroupRComponent;
  let fixture: ComponentFixture<GroupRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupRComponent]
    });
    fixture = TestBed.createComponent(GroupRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
