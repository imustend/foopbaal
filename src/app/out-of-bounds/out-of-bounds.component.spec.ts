import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfBoundsComponent } from './out-of-bounds.component';

describe('OutOfBoundsComponent', () => {
  let component: OutOfBoundsComponent;
  let fixture: ComponentFixture<OutOfBoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOfBoundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOfBoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
