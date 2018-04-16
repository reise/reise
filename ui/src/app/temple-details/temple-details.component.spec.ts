import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDetailsComponent } from './temple-details.component';

describe('TempleDetailsComponent', () => {
  let component: TempleDetailsComponent;
  let fixture: ComponentFixture<TempleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
