import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-iniciar',
  imports: [],
  templateUrl: './botao-iniciar.html',
  styleUrl: './botao-iniciar.css',
})
export class BotaoIniciar {
  @Input() btnConfigs: any;
  constructor(){ }
}
