import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {QuzinApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ShoppingListPage} from '../pages/shopping-list/shopping-list';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import {Http} from "@angular/http";

@NgModule({
    declarations: [
        QuzinApp,
        AboutPage,
        ShoppingListPage,
        HomePage,
        TabsPage,
        TranslatePipe
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
    providers: [
        {
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
            deps: [Http]
        },
        TranslateService
    ],
})
export class AppModule {
}
