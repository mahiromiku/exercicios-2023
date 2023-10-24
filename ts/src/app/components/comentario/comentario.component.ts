import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {
  @Input() nomeUsuario: string = ''
  @Input() isAutor: boolean = false
  @Input() mensagem: string = ''
  @Input() tipoAutor: "Autor" | "Coautor" = "Autor"

  constructor() { }

  ngOnInit(): void {
  }

  configurarCorCard():string{
    if(this.isAutor == true){
      return "auto-color"
    }
    return "nao-autor-color"
  }

  mostrarAutor(){
    if(this.isAutor == true){
      return "exibir-autor"
    }
    return "esconder-autor"
  }

  transformarMensagemEmArray():string[]{
    return this.mensagem.split("//")
  }
}
