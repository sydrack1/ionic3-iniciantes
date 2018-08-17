import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo:"Sydrack",
    data:"November 5, 1955",
    descricao:"Meu app Incrivel.",
    qntd_likes:12,
    qntd_comments:4,
    time_comment:"11h ago"
  }

  // Variáveis
  public lista_filmes = new Array<any>();
  public nome_usuario:string = "Sydrack";
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController,
    ) {
  }

  // Funções
  abreCarregando() {
     this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
      
    });
    this.loader.present();
  }

  fechaCarregando() {
     this.loader.dismiss();
  }

  //public somaDoisNumeros(num1:number, num2:number):void{
        // alert(num1 + num2);
  //}
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  ionViewDidEnter() {
   // this.somaDoisNumeros(10,99);
   this.carregarFilmes();
  }

  abrirDetalhe(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhePage, {id: filme.id});
  }
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
      
    
  }

  carregarFilmes(newpage: boolean = false) {
    this.abreCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data =>{
        const response = (data as any);
        const retorno = JSON.parse(response._body);
        if(newpage){
        this.lista_filmes = this.lista_filmes.concat(retorno.results);
        console.log(this.page);
        console.log(this.lista_filmes);
        this.infiniteScroll.complete();
        }else{
        this.lista_filmes = retorno.results;
      }
        console.log(retorno);
        this.fechaCarregando();
        if (this.isRefreshing) {
         
         this.refresher.complete();
         this.isRefreshing = false;
 
        }
      },
      error =>{
        console.log(error);
        this.fechaCarregando();
        if (this.isRefreshing) {
          
         this.refresher.complete();
         this.isRefreshing = false;
 
        }
      }
    )
   }
  }


 