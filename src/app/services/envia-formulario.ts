import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {
  enviaInformaçãoParaBackend(info: string){
    alert(info)
  }
}
