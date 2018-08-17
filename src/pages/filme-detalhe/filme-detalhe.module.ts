import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmeDetalhePage } from './filme-detalhe';

@NgModule({
  declarations: [
    FilmeDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FilmeDetalhePage),
  ],
})
export class FilmeDetalhePageModule {}
