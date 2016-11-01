import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {ShoppingListPage} from '../shopping-list/shopping-list';
import {SeasonalPage} from "../seasonal/seasonal";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root: any = HomePage;
    tab2Root: any = SeasonalPage;
    tab3Root: any = ShoppingListPage;

    constructor() {

    }
}
