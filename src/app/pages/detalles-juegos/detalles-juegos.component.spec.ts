import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJuegosComponent } from './detalles-juegos.component';

describe('DetallesJuegosComponent', () => {
  let component: DetallesJuegosComponent;
  let fixture: ComponentFixture<DetallesJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesJuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
