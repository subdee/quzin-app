import {Component} from '@angular/core';
import 'rxjs/Rx';

import {NavController} from 'ionic-angular';
import {ApiService} from "../../app/services/api.service";

@Component({
    selector: 'page-contact',
    templateUrl: 'shopping-list.html',
    providers: [ApiService]
})
export class ShoppingListPage {

    api: ApiService;
    shoppingItems: any;
    items: any;
    allItems: any;
    showList: boolean;
    searchModel: string = '';

    constructor(public navCtrl: NavController, api: ApiService) {
        this.api = api;
        this.api.getAllItems().subscribe(data => {
            this.allItems = data;
        });
        this.initializeItems();
        this.showList = false;
    }

    ionViewDidEnter() {
        this.loadShoppingList();
    }

    initializeItems() {
        this.items = this.allItems;
    }

    loadShoppingList() {
        this.api.getShoppingList().subscribe(data => {
            this.shoppingItems = data;
        });
    }

    saveItem(id) {
        this.api.saveToShoppingList(id).subscribe(data => {
            if (data.success) {
                this.loadShoppingList();
            }
            this.showList = false;
            this.searchModel = '';
        });
    }

    removeItem(id) {
        this.api.removeFromShoppingList(id).subscribe(data => {
            if (data.success) {
                this.loadShoppingList();
            }
        });
    }

    getItems(event: any) {
        let val = event.target.value;

        if (val && val.trim() != '') {
            this.showList = true;
            this.initializeItems();
            this.items = this.items.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    onCancel(event) {
        this.showList = false;
        event.target.value = '';
    }
}
