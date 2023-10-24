import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.scss']
})

export class TrabalhoComponent implements OnInit {
  isMobile: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.checarTamanhoDeTela();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checarTamanhoDeTela();
  }

  checarTamanhoDeTela(){
    this.isMobile = window.innerWidth <= 1349
  }
}
