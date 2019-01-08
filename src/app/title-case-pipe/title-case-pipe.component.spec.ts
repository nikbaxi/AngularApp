import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCasePipeComponent } from './title-case-pipe.component';

describe('TitleCasePipeComponent', () => {
  let component: TitleCasePipeComponent;
  let fixture: ComponentFixture<TitleCasePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCasePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
