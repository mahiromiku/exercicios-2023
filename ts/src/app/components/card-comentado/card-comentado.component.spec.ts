import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComentadoComponent } from './card-comentado.component';

describe('CardComentadoComponent', () => {
  let component: CardComentadoComponent;
  let fixture: ComponentFixture<CardComentadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComentadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComentadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
