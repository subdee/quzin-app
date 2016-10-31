import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {QuzinApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ShoppingListPage} from '../pages/shopping-list/shopping-list';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

@NgModule({
    declarations: [
        QuzinApp,
        AboutPage,
        ShoppingListPage,
        HomePage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(QuzinApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        QuzinApp,
        AboutPage,
        ShoppingListPage,
        HomePage,
        TabsPage
    ],
    providers: [],
})
export class AppModule {
}
