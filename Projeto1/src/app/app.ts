import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { BotaoIniciar } from "./components/botao-iniciar/botao-iniciar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BotaoIniciar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projeto1');
}
