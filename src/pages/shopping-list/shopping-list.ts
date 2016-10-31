import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-contact',
    templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {

    shoppingItems: any;
    items: any;
    allItems: any;
    showList: boolean;
    searchModel: string = '';

    constructor(public navCtrl: NavController, public http: Http) {
        this.http.get('http://localhost:8000/api/items').map(res => res.json()).subscribe(data => {
            this.allItems = data;
        });
        this.loadShoppingList();
        this.initializeItems();
        this.showList = false;
    }

    initializeItems() {
        this.items = this.allItems;
    }

    loadShoppingList() {
        this.http.get('http://localhost:8000/api/shoppingList').map(res => res.json()).subscribe(data => {
            this.shoppingItems = data;
        });
    }

    saveItem(id) {
        this.http.post('http://localhost:8000/api/shoppingList/' + id, []).map(res => res.json()).subscribe(data => {
            if (data.success) {
                this.loadShoppingList();
            }
            this.showList = false;
            this.searchModel = '';
        });
    }

    removeItem(event, id) {
        this.http.delete('http://localhost:8000/api/shoppingList/' + id, []).map(res => res.json()).subscribe(data => {
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
