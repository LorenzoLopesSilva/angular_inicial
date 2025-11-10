import { Component, inject, Input } from '@angular/core';
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

  submit(){
    this.enviaFormularioService.enviaInformaçãoParaBackend("Enviando Informação...")
  }

  
}
