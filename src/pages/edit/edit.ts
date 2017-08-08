import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';

/**
 * Generated class for the EditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
user = { name: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiService: RestapiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  editUser() {
  	this.restapiService.editUser(this.user).then((result) => {
    	console.log(result);
  	}, (err) => {
    	console.log(err);
  	});
  }

}
