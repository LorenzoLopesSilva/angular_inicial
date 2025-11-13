import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoIniciar } from './botao-iniciar';

describe('BotaoIniciar', () => {
  let component: BotaoIniciar;
  let fixture: ComponentFixture<BotaoIniciar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoIniciar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoIniciar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
