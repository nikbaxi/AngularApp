import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersDetailsComponent } from './followers-details.component';

describe('FollowersDetailsComponent', () => {
  let component: FollowersDetailsComponent;
  let fixture: ComponentFixture<FollowersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
