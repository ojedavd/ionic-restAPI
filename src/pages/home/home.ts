import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
import { InsertPage } from '../../pages/insert/insert';
import { EditPage } from '../../pages/edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	users: any;
  	
  	constructor(public navCtrl: NavController, public restapiServiceProvider: RestapiServiceProvider) {
		this.getUsers();
  	}

	getUsers() {
  		this.restapiServiceProvider.getUsers()
		  .then(data => {this.users = data;	});
	}

  insert(){
   this.navCtrl.push(InsertPage);
  }

  edit(){
   this.navCtrl.push(EditPage);
  }

}
