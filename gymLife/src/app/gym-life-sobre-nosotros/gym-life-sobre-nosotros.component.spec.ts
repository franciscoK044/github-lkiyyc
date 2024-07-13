import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLifeSobreNosotrosComponent } from './gym-life-sobre-nosotros.component';

describe('GymLifeSobreNosotrosComponent', () => {
  let component: GymLifeSobreNosotrosComponent;
  let fixture: ComponentFixture<GymLifeSobreNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymLifeSobreNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymLifeSobreNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
