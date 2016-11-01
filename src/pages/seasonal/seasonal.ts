import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {ApiService} from "../../app/services/api.service";
import {ToastController} from 'ionic-angular';
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'page-about',
    templateUrl: 'seasonal.html',
    providers: [ApiService, TranslateService]
})
export class SeasonalPage {
    api: ApiService;
    translate: TranslateService;
    items: any;

    constructor(public navCtrl: NavController, api: ApiService, public toastCtrl: ToastController, translate: TranslateService) {
        this.api = api;
        this.translate = translate;
        this.api.getSeasonalItems().subscribe(data => {
            this.items = data;
        });
    }

    addToShoppingList(id) {
        let toastMessage: string = '';
        this.translate.get('Item added to shopping list').subscribe((res: string) => {
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
}
