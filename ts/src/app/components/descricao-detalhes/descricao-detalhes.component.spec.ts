import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoDetalhesComponent } from './descricao-detalhes.component';

describe('DescricaoDetalhesComponent', () => {
  let component: DescricaoDetalhesComponent;
  let fixture: ComponentFixture<DescricaoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
