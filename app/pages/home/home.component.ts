import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.component.html'
})
export class HomePage {

  toto: string;

  constructor(private navCtrl: NavController) {

    this.toto = 'toto'; 

  }
}
