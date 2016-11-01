import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ApiService {
    username: string = 'api';
    password: string = 'somerandomtoken';
    apiEndpoint: string = 'http://quzin.subdee.org/api';

    constructor(public http: Http) {
    }

    generateAuthHeaders() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));

        return headers;
    }

    getAllItems() {
        return this.http.get(this.apiEndpoint + '/items', {
            headers: this.generateAuthHeaders()
        }).map(res => res.json());
    }

    getShoppingList() {
        return this.http.get(this.apiEndpoint + '/shoppingList', {
            headers: this.generateAuthHeaders()
        }).map(res => res.json());
    }

    saveToShoppingList(id) {
        return this.http.post(this.apiEndpoint + '/shoppingList/' + id, [], {
            headers: this.generateAuthHeaders()
        }).map(res => res.json());
    }

    removeFromShoppingList(id) {
        return this.http.delete(this.apiEndpoint + '/shoppingList/' + id, {
            headers: this.generateAuthHeaders()
        }).map(res => res.json());
    }

    addNewItem(name) {
        return this.http.post(this.apiEndpoint + '/items', {name: name}, {
            headers: this.generateAuthHeaders()
        }).map(res => res.json());
    }
}