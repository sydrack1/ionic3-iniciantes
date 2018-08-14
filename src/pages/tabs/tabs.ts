import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
//import { IntroPage } from '../intro/intro';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = ConfiguracoesPage;
  

  constructor() {

  }
}
