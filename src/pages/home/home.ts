import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  total:string = "asdasdads";

  constructor(public navCtrl: NavController, public http: HTTP) {
    console.log("HOLA Mundo");
    this.cargaTareas();
  }

  cargaTareas(){
    this.http.get('http://ipmapi.jpena.ga/index.php/registro/todos', {}, {}).then(data => {
      console.log("HTTP success");

      let data_res = JSON.parse(data.data);
      this.total = data_res.data.length;

      setTimeout(() => {
        this.cargaTareas();
      },10000);
    }).catch(error => {
      console.log("HTTP error");
      console.log(error.status);
      console.log(error.error);
      console.log(error.headers);
    });
  }




}
