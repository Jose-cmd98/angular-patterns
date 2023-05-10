import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDirectiveComponent } from './home-directive.component';

describe('HomeDirectiveComponent', () => {
  let component: HomeDirectiveComponent;
  let fixture: ComponentFixture<HomeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
