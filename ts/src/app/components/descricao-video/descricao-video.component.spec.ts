import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoVideoComponent } from './descricao-video.component';

describe('DescricaoVideoComponent', () => {
  let component: DescricaoVideoComponent;
  let fixture: ComponentFixture<DescricaoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
