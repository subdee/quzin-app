import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {QuzinApp} from './app.component';
import {ShoppingListPage} from '../pages/shopping-list/shopping-list';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import {Http} from "@angular/http";
import {SeasonalPage} from "../pages/seasonal/seasonal";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    QuzinApp,
    SeasonalPage,
    ShoppingListPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(QuzinApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    QuzinApp,
    SeasonalPage,
    ShoppingListPage,
    HomePage,
    TabsPage
  ]
})
export class AppModule {
}
