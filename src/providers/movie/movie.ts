
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=5d808f9ce7edeb533b47147b59f68e8b`);
  }

  getMoviesDetail(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=5d808f9ce7edeb533b47147b59f68e8b`);
  }


}
