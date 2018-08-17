import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html',
  providers:[
    MovieProvider,
  ]
})
export class FilmeDetalhePage {
 // Variáveis
  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
  ){
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMoviesDetail(this.filmeid).subscribe(data =>{
      let retorno = (data as any)._body;
      this.filme = JSON.parse(retorno);

    }, error => {
      console.log(error);
    })

  }

}
