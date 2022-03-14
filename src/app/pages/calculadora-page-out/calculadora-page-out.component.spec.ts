import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPageOutComponent } from './calculadora-page-out.component';

describe('CalculadoraPageOutComponent', () => {
  let component: CalculadoraPageOutComponent;
  let fixture: ComponentFixture<CalculadoraPageOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraPageOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraPageOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
