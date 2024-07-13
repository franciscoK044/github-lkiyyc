import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLifeProductosComponent } from './gym-life-productos.component';

describe('GymLifeProductosComponent', () => {
  let component: GymLifeProductosComponent;
  let fixture: ComponentFixture<GymLifeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymLifeProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymLifeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
