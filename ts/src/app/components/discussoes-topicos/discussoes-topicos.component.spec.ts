import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussoesTopicosComponent } from './discussoes-topicos.component';

describe('DiscussoesTopicosComponent', () => {
  let component: DiscussoesTopicosComponent;
  let fixture: ComponentFixture<DiscussoesTopicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussoesTopicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussoesTopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
