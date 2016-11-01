import {Component} from '@angular/core';

import {NavController, Tabs} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    tab: Tabs;

    constructor(public navCtrl: NavController) {
        this.tab = this.navCtrl.parent;
    }

    goToSeasonal() {
        this.tab.select(1);
    }

    goToShoppingList() {
        this.tab.select(2);
    }
}
