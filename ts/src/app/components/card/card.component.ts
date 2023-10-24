import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() assuntoDaPergunta: string = ''
  @Input() nomeDoUsuario: string = ''
  @Input() mensagem: string = ''
  @Input() like: string = ''
  @Input() resposta: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  checarNumeroLike(): string{
    if(Number(this.like) > 1){
      return 'likes'
    }
    return 'like'
  }

  checarNumeroResposta(){
    if(Number(this.resposta) > 1){
      return 'respostas'
    }
    return 'resposta'
  }
}
