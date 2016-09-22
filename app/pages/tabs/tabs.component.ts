import {Component} from '@angular/core';
import {HomePage} from '../home/home.component';
import {AboutPage} from '../about/about.component';

@Component({
  templateUrl: 'build/pages/tabs/tabs.component.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
  }
}
