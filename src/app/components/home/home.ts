import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Logica do componente
  // Onde ficará a parte dinâmica do componente

  // meuBooleano = false;

  // atualizarBooleano(valor: boolean){
  //   this.meuBooleano = valor
  // }

  private enviaFormularioService = inject(EnviaFormulario)

  nome: string = "Lorenzo";
  idButton: number = 1;
  mostrarTitulo = false;
  listItems: string[] = ["Lorenzo", "Ingrid", "Rafa"];

  @Input("nomeInput") minhaPropsDeFora!: string;

  @Output() emitindoValorNome = new EventEmitter<string>()

  submit(){
    this.emitindoValorNome.emit(this.nome)
    this.enviaFormularioService.enviaInformaçãoParaBackend("Enviando Informação...")
  }

  
}
