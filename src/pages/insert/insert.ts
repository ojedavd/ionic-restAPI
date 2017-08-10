import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

/**
 * Generated class for the InsertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {
user = {id:'', name: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }

saveUser() {
  this.restapiService.saveUser(this.user).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
}

}
