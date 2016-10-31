import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {TranslateService} from "ng2-translate";


@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class QuzinApp {
    rootPage = TabsPage;

    constructor(platform: Platform, private  translate: TranslateService) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
        this.translate = translate;
        this.translateConfig();
    }

    translateConfig() {
        var userLang = navigator.language.split('-')[0];
        userLang = /(el)/gi.test(userLang) ? userLang : 'el';
        this.translate.setDefaultLang('el');
        this.translate.use(userLang);
    }
}
