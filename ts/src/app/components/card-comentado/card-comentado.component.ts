import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-comentado',
  templateUrl: './card-comentado.component.html',
  styleUrls: ['./card-comentado.component.scss']
})
export class CardComentadoComponent implements OnInit {
  isActiveCard: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  trocarCondicaoDoCard(){
    this.isActiveCard = !this.isActiveCard
  }
}
