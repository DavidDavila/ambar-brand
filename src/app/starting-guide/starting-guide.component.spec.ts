import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingGuideComponent } from './starting-guide.component';

describe('StartingGuideComponent', () => {
  let component: StartingGuideComponent;
  let fixture: ComponentFixture<StartingGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
