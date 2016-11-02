import {Component} from '@angular/core';

import {NavController, LoadingController, Loading} from 'ionic-angular';
import {ApiService} from "../../app/services/api.service";
import {ToastController} from 'ionic-angular';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'page-about',
  templateUrl: 'seasonal.html',
  providers: [ApiService]
})
export class SeasonalPage {
  api: ApiService;
  items: any;
  loader: Loading;

  constructor(public navCtrl: NavController, api: ApiService, public toastCtrl: ToastController, public translateService: TranslateService, public loadingCtrl: LoadingController) {
    this.createLoader();
    this.loader.present();
    this.api = api;
    this.api.getSeasonalItems().subscribe(data => {
      this.items = data;
      this.loader.dismissAll();
    });
  }

  addToShoppingList(id) {
    let toastMessage: string = '';
    this.translateService.get('Item added to shopping list').subscribe((res: string) => {
      toastMessage = res;
    });
    let toast = this.toastCtrl.create({
      message: toastMessage,
      duration: 2000,
      position: 'middle'
    });
    this.api.saveToShoppingList(id).subscribe(data => {
      if (data.success) {
        toast.present();
      }
    });
  }

  createLoader() {
    let loaderMessage = '';
    this.translateService.get('Hold on...').subscribe((res: string) => {
      loaderMessage = res;
    });
    this.loader = this.loadingCtrl.create({
      content: loaderMessage
    });
  }
}
