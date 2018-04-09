import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDatailsComponent } from './temple-datails.component';

describe('TempleDatailsComponent', () => {
  let component: TempleDatailsComponent;
  let fixture: ComponentFixture<TempleDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
