import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

import {TrabalhoComponent} from '../app/pages/trabalho/trabalho.component'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { DescricaoVideoComponent } from './components/descricao-video/descricao-video.component';
import { DescricaoDetalhesComponent } from './components/descricao-detalhes/descricao-detalhes.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { DiscussoesTopicosComponent } from './components/discussoes-topicos/discussoes-topicos.component';
import { CardComponent } from './components/card/card.component';
import { CardComentadoComponent } from './components/card-comentado/card-comentado.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: '', component: TrabalhoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TrabalhoComponent,
    AsideComponent,
    MobileHeaderComponent,
    DesktopHeaderComponent,
    DescricaoVideoComponent,
    DescricaoDetalhesComponent,
    ResumoComponent,
    DiscussoesTopicosComponent,
    CardComponent,
    CardComentadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
