import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplesComponent } from './temples.component';

describe('TemplesComponent', () => {
  let component: TemplesComponent;
  let fixture: ComponentFixture<TemplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
