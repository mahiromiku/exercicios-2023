import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussoes-topicos',
  templateUrl: './discussoes-topicos.component.html',
  styleUrls: ['./discussoes-topicos.component.scss']
})
export class DiscussoesTopicosComponent implements OnInit {
  isTopicCreated: boolean = true
  wasSend: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  TrocarCondicaoTopicoCriado(){
    this.isTopicCreated = !this.isTopicCreated
  }

  TrocarCondicaoEnviarTopico(){
    this.wasSend = !this.wasSend
  }

  voltarAoTopicoInicial(){
    this.isTopicCreated = true
    this.wasSend = true
  }
}
